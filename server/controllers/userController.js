const User = require("../model/user");
const bcrypt = require("bcrypt");
const createUser = async (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const user = new User({
        email: req.body.email,
        password: hashedPassword,
      });
      //save user
      user
        .save()
        .then((result) => {
          res
            .status(201)
            .json({ message: "user created successfully", result });
        })
        .catch((e) => {
          res.status(500).json({
            message: "error creating user",
            error,
          });
        });
    })
    .catch((e) => {
      res.status(500).json({ message: "passwd not hashed successfully", e });
    });
};
module.exports = {
  createUser,
};
