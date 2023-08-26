const Order = require('../models/order')
const Menu = require('../models/menu')
const Password = require('../models/password')
const Menu2 = {
    'Burger And Fries Combo': 4.99,
    'Burger And A Half Combo': 4.99,
    'Burger And Slider Combo': 4.99,
    'Fries': 0.99,
    'Salad': 2.99,
    'Shake(Small Strawberry)': 0.99,
    'Shake(Medium Strawberry)': 1.99,
    'Shake(Large Strawberry)': 2.99,
    'Soft Drink(Small Coke)': 0.99,
    'Soft Drink(Small Sprite)': 0.99,
    'Soft Drink(Small Tea)': 0.99,
    'Soft Drink(Medium Coke)': 1.99,
    'Soft Drink(Medium Sprite)': 1.99,
    'Soft Drink(Medium Tea)': 1.99,
    'Soft Drink(Large Coke)': 1.99,
    'Soft Drink(Large Sprite)': 1.99,
    'Soft Drink(Large Tea)': 1.99,
    'Swine And Beef Burger Combo': 6.99,
    'Double Stack Combo': 6.99,
    'Egg and Pulled Pork Burger Combo': 6.99
}
createOrder =  (req, res) => {
    console.log('creating')
    let realTotal = 0;
    console.log(JSON.stringify(req.body))
    for (let i = 0; i < req.body.items.length; i++) {
        console.log(req.body.items[i].toString() + 'First')
        let thisSearch = req.body.items[i].toString()
        let thisVal = Menu2[thisSearch];
        realTotal += thisVal
        console.log(thisVal)
    }
    console.log(realTotal + 'why')
    const order = new Order({
        name: req.body.name,
        total: realTotal,
        email: req.body.email,
        items: req.body.items,
        phone: req.body.phone,
        address: req.body.address,
        cardCompany: req.body.cardCompany,
        cardNumber: req.body.cardNumber,
        comment: req.body.comment
    });
   Order.findOne({ 'address': req.body.address }, function (error, exist) {
        if (exist && !error) {
            res.status(500).send({
                message: 'already exists'
            });
        } else {
     

  
            console.log(order)
            // SAVE A Order IN THE MongoDB
            order.save()

                // THEN PROMISE (successCallback)
                .then(data => {
                    res.send(data);

                    // THEN PROMISE (failureCallback)    
                }).catch(err => {
                    res.status(500).send({
                        message: 'Error Not created'
                    });
                });

            return;
        }
    });
    
    
}


updateOrder = async (req, res) => {
console.log('here' + req.params.id)
    Order.findOne({ _id: req.params.id }, (err, order) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Order not found!',
            })
        }
 
        order.inProgress = true
        order
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: order._id,
                    message: 'Order updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Order not updated!',
                })
            })
    })
}

deleteOrder = async (req, res) => {

    await Order.findOneAndDelete({ _id: req.params.id }, (err, order) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!order) {
            return res
                .status(404)
                .json({ success: false, error: `Order not found` })
        }
        return res.status(200).json({ success: true, data: order })
    }).catch(err => console.log(err))
}

getOrderById = async (req, res) => {
    
}
checkPass = async (req, res) => {
    console.log('Checking Pass')
    console.log(req.body.Password)
    Password.findOne({ 'name': req.body.Password }, function (error, exist) {
        if (exist && !error) {
            res.send({
                message: 'You are an Admin',
                result:true
            });
        } else {
            res.status(500).send({
                message: 'This is not the password',
                result: false
            });
        }
    });
}
getOrders = async (req, res) => {
    await Order.find({}, (err, orders) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!orders.length) {
            return res
                .status(404)
                .json({ success: false, error: `Order not found` })
        }
        return res.status(200).json({ success: true, data: orders })
    }).catch(err => console.log(err)) 
}

module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrders,
    getOrderById,
    checkPass,
}