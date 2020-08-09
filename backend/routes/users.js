const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  // this will find all of the users
  User.find()
    // return it in json
    .then((users) => res.json(users))
    // errors will have a 400 status
    .catch((err) => res.status(400).json("Error: " + err));
});
// this will give us our add
router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
