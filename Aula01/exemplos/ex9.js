const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { produto, preco } = req.body;

    if (typeof produto !== 'string' || typeof preco !== 'number' || preco <= 0 || isNaN(preco)) {
        return res.status(400).json({ error: 'Informe um produto válido e um preço numérico positivo.' });
    }

    let desconto = 0;

    if (produto.toLowerCase() === 'camisa') {
        desconto = 0.20; 
    } else if (produto.toLowerCase() === 'bermuda') {
        desconto = 0.10; 
    } else if (produto.toLowerCase() === 'calca') {
        desconto = 0.15; 
    }

    const valorDesconto = preco * desconto;
    const precoFinal = preco - valorDesconto;

    res.json({
        produto: produto.charAt(0).toUpperCase() + produto.slice(1),
        precoOriginal: preco.toFixed(2),
        desconto: valorDesconto.toFixed(2),
        precoFinal: precoFinal.toFixed(2),
    });
});

module.exports = router;