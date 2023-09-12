const express = require("express");
const router = express.Router();
const Model = require("../model/model");
const {deleteHabit,
  updateHabit,
  createHabit,
  getHabit,
  getHabits,} = require("../controllers/habitController")

const {createUser, loginUser} = require("../controllers/userController")

// routes for habits
router.post("/post", createHabit);

router.get("/getAll", getHabits);

router.get("/getOne/:id", getHabit);

router.patch("/update/:id", updateHabit);

router.delete("/delete/:id", deleteHabit);

//routes for users
router.post("/register", createUser);

router.post("/login", loginUser)

module.exports = router;
