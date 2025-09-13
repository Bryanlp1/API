let categorias3 = [
  { id: 1, descripcion: "Electrónica" },
  { id: 2, descripcion: "Hogar" },
  { id: 3, descripcion: "Jardín" }
];

module.exports = {
  index: (req, res) => {
    res.render('categorias3/index', { categorias3 });
  },

  create: (req, res) => {
    res.render('categorias3/create');
  },

  store: (req, res) => {
    const { descripcion } = req.body;
    // Validación simple
    if (!descripcion || !descripcion.trim()) {
      return res.redirect('/categorias3/create');
    }
    const nuevoId = categorias3.length ? categorias3[categorias3.length - 1].id + 1 : 1;
    const nuevo = { id: nuevoId, descripcion: descripcion.trim() };
    categorias3.push(nuevo);
    res.redirect('/categorias3');
  },

  show: (req, res) => {
    const id = parseInt(req.params.id);
    const categoria = categorias3.find(c => c.id === id);
    if (!categoria) return res.status(404).send('Categoría no encontrada');
    res.render('categorias3/show', { categoria });
  }
};
