const categorias = [
    { id: 1, nombre: 'Categoría 1' },
    { id: 2, nombre: 'Categoría 2' },
    { id: 3, nombre: 'Categoría 3' },
];

const index = (req, res) => {
    res.render('categorias/index', { categorias });
};

const show = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const categoria = categorias.find(c => c.id === id);

    if (!categoria) {
        return res.status(404).send("Categoría no encontrada");
    }

    res.render('categorias/show', { categoria });
};

module.exports = {
    index,
    show
};
