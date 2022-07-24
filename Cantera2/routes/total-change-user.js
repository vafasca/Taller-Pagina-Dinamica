const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* GET users listing. */
router.put('/:id', function (req, res, next) {
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    lastName: req.body.lastname,
    age: req.body.age,
    email: req.body.email,
    genre: req.body.genre,
    familiares: req.body.familiares
  })
    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });

});

module.exports = router;
