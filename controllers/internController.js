const store = require("../data/interns");

function getInterns(req, res) {
  res.status(200).json({ success: true, data: store.getAll() });
}

function getInternById(req, res) {
  const id = Number(req.params.id);
  const intern = store.getById(id);

  if (!intern) {
    return res.status(404).json({ success: false, message: "Intern not found" });
  }

  res.status(200).json({ success: true, data: intern });
}

function createIntern(req, res) {
  const { name, role, email } = req.body;

  if (!name || !role || !email) {
    return res.status(400).json({
      success: false,
      message: "name, role, and email are all required",
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email format" });
  }

  const newIntern = store.add({ name, role, email });
  res.status(201).json({ success: true, data: newIntern });
}

module.exports = { getInterns, getInternById, createIntern };
