const express = require("express");
const cors = require("cors");
const internRoutes = require("./routes/internRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Project 2 - Backend API Development is running" });
});

app.use("/api/interns", internRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend API running on port ${PORT}`));
