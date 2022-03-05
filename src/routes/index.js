const express = require("express");

const router = express.Router();

const { getTasks, addTask, editTask, delTask } = require("../controller");

router.get("/tasks", getTasks);
router.post("/task", addTask);
router.patch("/task/:id", editTask);
router.delete("/task/:id", delTask);

module.exports = router;
