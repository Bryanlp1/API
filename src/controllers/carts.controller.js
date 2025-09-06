const axios = require('axios');

const getCarts = async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/carts');
        const carts = response.data;
        res.render('carts', { carts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los carritos');
    }
}

module.exports = { getCarts };
