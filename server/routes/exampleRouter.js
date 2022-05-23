const { Router } = require('express');
const { getExamples, getOtherExample } = require('../controller/example');

const router = Router();

// aqui vai TODAS as requisições dessa rota específica
router.get('/', getExamples);
router.get('/other', getOtherExample);

module.exports = router;
