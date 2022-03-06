const express = require("express");

const router = express.Router();

const {
  getTasks,
  addTask,
  editTask,
  delTask,
  isDone,
} = require("../controller");

router.get("/tasks", getTasks);
router.post("/task/:name", addTask);
router.patch("/task/:id/:name", editTask);
router.patch("/isdone/:id", isDone);
router.delete("/task/:id", delTask);

module.exports = router;
