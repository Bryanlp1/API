let inventario = [
    { id: 1, descripcion: "Laptop Dell" },
    { id: 2, descripcion: "Teclado Mecánico" },
    { id: 3, descripcion: "Mouse Logitech" }
];

module.exports = {
    index: (req, res) => {
        res.render("inventario/index", { inventario });
    },

    create: (req, res) => {
        res.render("inventario/create");
    },

    store: (req, res) => {
        const { descripcion } = req.body;
        const nuevo = {
            id: inventario.length + 1,
            descripcion
        };
        inventario.push(nuevo);
        res.redirect("/inventario");
    },

    show: (req, res) => {
        const id = parseInt(req.params.id);
        const producto = inventario.find(item => item.id === id);
        if (!producto) {
            return res.send("Producto no encontrado");
        }
        res.render("inventario/show", { producto });
    }
};
