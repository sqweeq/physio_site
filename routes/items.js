const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// Item Model
const Item = require("../models/Items");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});
// multer used tor image upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }
});
// route get api/items, get all items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// route post api/items, add a item, private
router.post("/", auth, upload.single("productImage"), (req, res) => {
  // console.log(req.file.path);

  const newItem = new Item({
    name: req.body.name,
    description: req.body.description,
    date: req.body.date,
    price: req.body.price,
    category: req.body.category,
    userRefID: req.body.userRefID,
    showMore: req.body.showMore,
    productImage: req.file.path,
    guestItemID: req.body.guestItemID
  });
  newItem
    .save()
    .then(item => res.json(item))
    .catch();
});
// route post api/items, add a item, private
router.post("/cart", auth, (req, res) => {
  // console.log(req.file.path);

  const newItem = new Item({
    name: req.body.name,
    description: req.body.description,
    date: req.body.date,
    price: req.body.price,
    category: req.body.category,
    userRefID: req.body.userRefID,
    showMore: req.body.showMore,
    productImage: req.body.productImage,
    guestItemID: req.body.guestItemID
  });
  newItem
    .save()
    .then(item => res.json(item))
    .catch();
});
// route delete api/items, delete a item, private
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
