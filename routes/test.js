const express = require('express');
const { test } = require('../controller/test');
const { checkToken, dataValidation } = require('../tokenValidation');
const router = express.Router()

router.get('/getTestData/:name', checkToken, dataValidation,test)

module.exports = router;