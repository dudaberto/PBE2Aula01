const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { salarioAtual } = req.body;

    if (typeof salarioAtual !== 'number' || salarioAtual <= 0 || isNaN(salarioAtual)) {
        return res.status(400).json({ error: 'Informe um salário atual válido e positivo.' });
    }

    let aumento = 0;
    let percentual = 0;

    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        percentual = 15;
        aumento = salarioAtual * 0.15;
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        percentual = 12;
        aumento = salarioAtual * 0.12;
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        percentual = 9;
        aumento = salarioAtual * 0.09;
    } else if (salarioAtual >= 3000) {
        percentual = 6;
        aumento = salarioAtual * 0.06;
    }

    const novoSalario = salarioAtual + aumento;

    res.json({
        salarioAtual: salarioAtual.toFixed(2),
        aumento: aumento.toFixed(2),
        percentual,
        novoSalario: novoSalario.toFixed(2),
    });
});

module.exports = router;