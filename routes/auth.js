const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
// Item Model
const User = require("../models/User");

// route post /api/auth, authenticate user,
router.post("/", (req, res) => {
  const { email, password } = req.body;
  // simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  // checks for existing user
  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not  exists" });

    // validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
      jwt.sign(
        { id: user.id },
        JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;

          res.json({
            token,
            user: {
              _id: user.id,
              name: user.name,
              email: user.email
            }
          });
        }
      );
    });
  });
});

// route get  /api/auth/user, get user data, private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    // to not return password...
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;
