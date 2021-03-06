var Userdb = require('./model/model');
// create and save new user
exports.create = (req, res) => {
    // validate request
    if (req.body) {
        res.status(400).send({ message: 'Content can not be empty' })
        return;
    }
    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'some error occured while create operation'
            })
        })
}

// retrive and return all users/ retrive and return a single user
exports.find = (req, res) => {

}

// update a new indified  user by user id
exports.update = (req, res) => {

}

// delete a user with dpecofied user id in the request
exports.detete = (req, res) => {

}