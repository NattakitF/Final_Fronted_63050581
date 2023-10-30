const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/", todoController.index);
router.get("/:id", todoController.getById);
router.post("/", todoController.insert);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.destroy);

module.exports = router;
