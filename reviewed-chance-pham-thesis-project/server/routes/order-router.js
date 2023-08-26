const express = require('express')
const OrderCtrl = require('../controllers/order-controller')
const router = express.Router()

router.post('/order', OrderCtrl.createOrder)
router.post('/pass', OrderCtrl.checkPass)
router.put('/order/:id', OrderCtrl.updateOrder)
router.delete('/order/:id', OrderCtrl.deleteOrder)
router.get('/order/:id', OrderCtrl.getOrderById)
router.get('/orders', OrderCtrl.getOrders)

module.exports = router