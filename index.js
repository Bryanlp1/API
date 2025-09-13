require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
const mainRouter = require("./src/routes/main.routes");
app.use(mainRouter)
app.use('/productos', require('./src/routes/productos.router'));
app.use('/usuarios', require('./src/routes/usuarios.router'));
app.use('/categorias', require('./src/routes/categorias.routes'));
app.use('/carts', require('./src/routes/carts.routes'));
app.use(express.urlencoded({ extended: true })); 
app.use('/inventario', require('./src/routes/inventario.routes'));
app.use('/categorias3', require('./src/routes/categorias3.routes'));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

