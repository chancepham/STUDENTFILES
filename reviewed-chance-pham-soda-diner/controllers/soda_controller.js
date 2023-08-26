// --- CREATE CONTROLLER --- //

// ROUTE TO Soda MODELS
const Soda = require('../models/Soda.js');


// SAVE `FormData` - Soda TO MongoDB
exports.save = (req, res) => {
  console.log('Post a Soda: ' + JSON.stringify(req.body));
  Soda.findOne({ 'name': req.body.name }, function (error, exist) {
    if (exist && !error) {
      res.status(500).send({
        message: 'already exists'
      });
    } else {
      // CREATE A NEW Soda OBJECT ( year, make, model, color, maxSpeed)
      const soda = new Soda({
        // WRITE YOUR CODE HERE TO CREATE A NEW Soda OBJECT
        // YOU WILL NEED TO TAKE IN THE CAR DETAILS FROM YOUR CLIENT REQUEST (req.body)

        name: req.body.name,
        fizziness: req.body.fizziness,
        rating: req.body.rating
      });

      // SAVE A Soda IN THE MongoDB
      soda.save()

        // THEN PROMISE (successCallback)
        .then(data => {
          res.send(data);

          // THEN PROMISE (failureCallback)    
        }).catch(err => {
          res.status(500).send({
            message: err.message
          });
        });
    }
  });
 
};
// Update Values on soda
exports.update = (req, res) => {
  console.log('Update a Soda: ' + JSON.stringify(req.body));
  


  Soda.updateOne({ _id: req.params.id }, { $set: { name: req.body.name } })
    .updateOne({ _id: req.params.id }, { $set: { rating: req.body.rating } })
    .updateOne({ _id: req.params.id }, { $set: { fizziness: req.body.fizziness } })

    .then((soda) => {
      console.log('updated soda ', soda)
      res.sendStatus(200)

    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })


};
// Serve Values on soda
exports.serve = (req, res) => {
  console.log('Serve a Soda: ' + JSON.stringify(req.body));

 Soda.updateOne({ _id: req.params.id }, { $set: { serving: true } })

    .then((soda) => {
      console.log('updated and serving soda ', soda)
      res.sendStatus(200)

    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
};
// unserve Values on soda
exports.unserve = (req, res) => {
  console.log('unserve a Soda: ' + JSON.stringify(req.body));

  Soda.updateOne({ _id: req.params.id }, { $set: { serving: false } })

    .then((soda) => {
      console.log('updated and unserved soda ', soda)
      res.sendStatus(200)

    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
};
// DELETE Soda BY ID
exports.deleteById = (req, res) => {
  console.log('Looking up soda ', req.params.id)
  
  // WRITE YOUR CODE HERE TO USE MONGOOSE'S BUILT-IN DELETION METHOD
  Soda.deleteOne({ _id:req.params.id })
  // THEN PROMISE (successCallback)
  .then((soda) => {
    //WRITE YOUR CODE HERE TO SEND A CONFIRMATION THAT THE DELETION WORKED
    console.log('deleted soda ', soda)
    res.sendStatus(200)
    // CATCH PROMISE (failureCallback)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}

// FETCH (find) ALL SodaS
exports.findAll = (req, res) => {
  console.log("Fetching all soda");
  console.log(Soda);
  // WRITE YOUR CODE HERE TO USE MONGOOSE'S BUILT-IN FIND METHOD
  Soda.find()
    // THEN PROMISE (this is your successCallback)
    .then(soda => {
      // WRITE YOUR CODE HERE TO SEND ALL FOUND Soda DATA AS A RESPONSE
      console.log("Found these soda: a" + soda);
      res.json(soda)
      // CATCH PROMISE (failureCallback/error catcher)
      //WRITE YOUR CODE HERE TO HANDLE AN ERROR
    });
};
// FETCH (find) ALL SodaS
exports.allPossibleServing = (req, res) => {
  console.log("Fetching all soda");
  console.log(Soda);
  // WRITE YOUR CODE HERE TO USE MONGOOSE'S BUILT-IN FIND METHOD
  Soda.find({serving: true})
    // THEN PROMISE (this is your successCallback)
    .then(soda => {
      // WRITE YOUR CODE HERE TO SEND ALL FOUND Soda DATA AS A RESPONSE
      console.log("Found these soda: a" + soda);
      res.json(soda)
      // CATCH PROMISE (failureCallback/error catcher)
      //WRITE YOUR CODE HERE TO HANDLE AN ERROR
    });
};
