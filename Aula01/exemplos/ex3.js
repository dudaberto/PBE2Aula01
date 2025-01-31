const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { nomeMercadoria, precoMercadoria } = req.body;

    if (
        !nomeMercadoria ||
        typeof nomeMercadoria !== 'string' ||
        !precoMercadoria ||
        typeof precoMercadoria !== 'number' ||
        precoMercadoria <= 0
    ) {
        return res.status(400).json({ error: 'Informe um nome válido e um preço numérico positivo para a mercadoria.' });
    }

    let aumento = 0;

    if (precoMercadoria < 1000) {
        aumento = precoMercadoria * 0.05;
    } else {
        aumento = precoMercadoria * 0.07;
    }

    const precoNovo = precoMercadoria + aumento;

    res.json({
        nomeMercadoria,
        precoOriginal: precoMercadoria.toFixed(2),
        aumento: aumento.toFixed(2),
        precoNovo: precoNovo.toFixed(2),
    });
});

module.exports = router;