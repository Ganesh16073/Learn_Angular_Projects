const router = require("express").Router();
const ai = require("../controllers/ai.controller");

router.post("/generate-tasks", ai.generateTasks);

module.exports = router;
