const express = require('express');
const router = express.Router();
const { getByID, insert, getAllActive, getAllPast, updateStatus } = require('../api/order');

router.route('/save').post(insert);
router.route('/activeOrders').get(getAllActive);
router.route('/pastOrders').post(getAllPast);
router.route('/updateStatus').post(updateStatus);
router.route('/:id').get(getByID);

module.exports = router;