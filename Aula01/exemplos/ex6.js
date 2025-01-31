const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { num1, num2 } = req.body;

    if (
        typeof num1 !== 'number' ||
        typeof num2 !== 'number' ||
        isNaN(num1) ||
        isNaN(num2)
    ) {
        return res.status(400).json({ error: 'Informe dois números válidos.' });
    }

    const maior = Math.max(num1, num2);
    const menor = Math.min(num1, num2);

    res.json({ maior, menor });
});

module.exports = router;