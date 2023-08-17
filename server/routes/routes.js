const express = require("express");
const router = express.Router();
const Model = require("../model/model");
const {deleteHabit,
  updateHabit,
  createHabit,
  getHabit,
  getHabits,} = require("../controllers/habitController")

router.post("/post", createHabit);

router.get("/getAll", getHabits);

router.get("/getOne/:id", getHabit);

router.patch("/update/:id", updateHabit);

router.delete("/delete/:id", deleteHabit);

module.exports = router;
