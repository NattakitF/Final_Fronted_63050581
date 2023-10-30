const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// เชื่อมต่อกับ MongoDB
mongoose.connect("mongodb://localhost:27017/balance_sheet", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// ตรวจสอบการเชื่อมต่อกับ MongoDB
db.once("open", () => {
  console.log("Connected to MongoDB database");
});

//  Schema
const entrySchema = new mongoose.Schema({
  title: String,
  income: Number,
  expense: Number,
});

//  Model
const Entry = mongoose.model("Entry", entrySchema);

//  API สำหรับบันทึกรายรับ-รายจ่าย
app.post("/entries", (req, res) => {
  const { title, income, expense } = req.body;
  const entry = new Entry({ title, income, expense });
  entry.save((err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json(result);
  });
});

//  API สำหรับดึงข้อมูลรายการรับ-รายจ่าย
app.get("/entries", (req, res) => {
  Entry.find({}, (err, entries) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(entries);
  });
});

//  API สำหรับลบรายการรับ-รายจ่าย
app.delete("/entries/:id", (req, res) => {
  const { id } = req.params;
  Entry.findByIdAndRemove(id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
});

// เริ่มต้นการทำงานของเซิร์ฟเวอร์
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
