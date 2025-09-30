// Demo Express cơ bản

// const express = require('express');
import express from 'express';
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
  const { userName, userAge } = req.body;
  if (!userName || !userAge) {
    return res.status(400).json({ error: 'Vui lòng điền đầy đủ thông tin' });
  }
  res.status(201).json({
    message: `Tạo User thành công với các trường dữ liệu: \n Tên: ${userName} \n Tuổi: ${userAge}`
  });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});

