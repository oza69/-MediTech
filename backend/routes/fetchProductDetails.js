const express = require('express');
const router = express.Router();
const { getAllProducts, getSpecificProduct } = require('../api/product');

router.route('/').get(getAllProducts);
router.route('/:name').get(getSpecificProduct);

module.exports = router;