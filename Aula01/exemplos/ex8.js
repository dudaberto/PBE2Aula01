const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { nota1, nota2, nota3 } = req.body;

    if (
        typeof nota1 !== 'number' ||
        typeof nota2 !== 'number' ||
        typeof nota3 !== 'number' ||
        isNaN(nota1) ||
        isNaN(nota2) ||
        isNaN(nota3) ||
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {
        return res.status(400).json({ error: 'Informe três notas válidas entre 0 e 10.' });
    }

    const media = (nota1 + nota2 + nota3) / 3;

    let situacao = '';
    if (media >= 6) {
        situacao = 'Aprovado';
    } else if (media >= 4) {
        situacao = 'Recuperação';
    } else {
        situacao = 'Reprovado';
    }

    res.json({
        media: media.toFixed(1),
        situacao,
    });
});

module.exports = router;