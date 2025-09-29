
// Demo Express cơ bản

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware để parse JSON
app.use(express.json());

// Route GET
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Route POST
app.post('/user', (req, res) => {
  const user = req.body;
  if (!user || !user.name) {
    return res.status(400).json({ error: 'Thiếu trường name' });
  }
  res.status(201).json({ message: `User ${user.name} đã được tạo!`, user });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});

