// --- CREATE CONTROLLER --- //

// ROUTE TO Diner MODELS
const Diner = require('../models/Diner.js');


// SAVE `FormData` - Diner TO MongoDB
exports.save = (req, res) => {
    console.log('Post a Diner: ' + JSON.stringify(req.body));

    Diner.findOne({ 'name': req.body.name }, function (error, exist) {
        if (exist && !error) {
            res.status(500).send({
                message: 'already exists'
            });
        } else {

            // CREATE A NEW Diner OBJECT ( year, make, model, color, maxSpeed)
            const diner = new Diner({
                // WRITE YOUR CODE HERE TO CREATE A NEW Diner OBJECT
                // YOU WILL NEED TO TAKE IN THE CAR DETAILS FROM YOUR CLIENT REQUEST (req.body)

                name: req.body.name,
                location: req.body.location
            });

            // SAVE A Diner IN THE MongoDB
            diner.save()

                // THEN PROMISE (successCallback)
                .then(data => {
                    res.send(data);

                    // THEN PROMISE (failureCallback)    
                }).catch(err => {
                    res.status(500).send({
                        message: err.message
                    });
                });

            return;
        }
    });

  

};
// Update Values on diner
exports.update = (req, res) => {
    console.log('Update a Diner: ' + JSON.stringify(req.body));



    Diner.updateOne({ _id: req.params.id }, { $set: { name: req.body.name } })
        .updateOne({ _id: req.params.id }, { $set: { location: req.body.location } })
        .updateOne({ _id: req.params.id }, { $set: { serving: req.body.serving } })

        .then((diner) => {
            console.log('updated diner ', diner)
            res.sendStatus(200)

        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })


};

// DELETE Diner BY ID
exports.deleteById = (req, res) => {
    console.log('Looking up diner ', req.params.id)

    // WRITE YOUR CODE HERE TO USE MONGOOSE'S BUILT-IN DELETION METHOD
    Diner.deleteOne({ _id: req.params.id })
        // THEN PROMISE (successCallback)
        .then((diner) => {
            //WRITE YOUR CODE HERE TO SEND A CONFIRMATION THAT THE DELETION WORKED
            console.log('deleted diner ', diner)
            res.sendStatus(200)
            // CATCH PROMISE (failureCallback)
        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

// FETCH (find) ALL DinerS
exports.findAll = (req, res) => {
    console.log("Fetching all diner");
    console.log(Diner);
    // WRITE YOUR CODE HERE TO USE MONGOOSE'S BUILT-IN FIND METHOD
    Diner.find()
        // THEN PROMISE (this is your successCallback)
        .then(diner => {
            // WRITE YOUR CODE HERE TO SEND ALL FOUND Diner DATA AS A RESPONSE
            console.log("Found these diner: a" + diner);
            res.json(diner)
            // CATCH PROMISE (failureCallback/error catcher)
            //WRITE YOUR CODE HERE TO HANDLE AN ERROR
        });
};
