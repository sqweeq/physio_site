const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  if (!name | !email | !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  if (email.length < 6) {
    return res
      .status(400)
      .json({
        msg:
          "Email must be longer than 6 characters and includes @ and ending with .com"
      });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ msg: "Password must be longer than 6 characters" });
  }
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });
    const newUser = new User({
      name,
      email,
      password
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => {
            jwt.sign(
              { id: user.id },
              JWT_SECRET,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  user: {
                    name: user.name,
                    id: user.id,
                    email: user.email
                  }
                });
              }
            );
          })
          .catch();
      });
    });
  });
});
module.exports = router;
