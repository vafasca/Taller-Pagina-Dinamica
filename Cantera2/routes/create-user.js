const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* GET users listing. */
router.post('/', function (req, res, next) {
  const user = new User({
    name: req.body.name,
    lastName: req.body.lastname,
    age: req.body.age,
    email: req.body.email,
    genre: req.body.genre,
    familiares: req.body.familiares
  }); //crea un objeto usuario con respecto al schema User
  user
  .save()
  .then(resut => res.json(result))
  .catch(err => res.json(err));
});

module.exports = router;
