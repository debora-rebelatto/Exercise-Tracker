const router = require("express").Router();
let User = require('../models/user');

router.get('/', (req, res) => {
  try {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

router.post('/add', (req, res) => {
  try{
    const user = new User(req.body);
    user.save()
      .then(() => res.json('user added'))
      .catch(err => res.status(400).json('Error: ' + err));
  } catch(err) {
    return res.status(400).json('Error: ', + err);
  }
});

module.exports = app => app.use('/users', router);