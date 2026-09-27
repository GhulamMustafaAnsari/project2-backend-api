const express = require("express");
const router = express.Router();
const { getInterns, getInternById, createIntern } = require("../controllers/internController");

router.get("/", getInterns);
router.get("/:id", getInternById);
router.post("/", createIntern);

module.exports = router;
