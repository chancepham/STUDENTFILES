const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/burgerWizard',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
module.exports = db;