const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // เพื่อรับข้อมูลแบบ JSON

// ตัวอย่าง route
app.get("/", (req, res) => {
  res.send("Hello API!");
});

// ตัวอย่าง route GET
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});

// ตัวอย่าง route POST
app.post("/users", (req, res) => {
  const newUser = req.body;
  // ปกติจะบันทึก newUser ลงฐานข้อมูล
  res.status(201).json({ message: "User created", user: newUser });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
