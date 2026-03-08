const router = require("express").Router();
const task = require("../controllers/task.controller");
const auth = require("../middleware/auth.middleware");

router.get("/", auth, task.getTasks);
router.post("/", auth, task.createTask);
router.put("/:id", auth, task.updateTask);
router.delete("/:id", auth, task.deleteTask);

module.exports = router;
