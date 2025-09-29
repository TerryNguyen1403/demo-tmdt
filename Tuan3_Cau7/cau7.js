
// cau7.js
// Demo MongoDB + Express

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://127.0.0.1:27017/demoDB'; // thay bằng URI của bạn

app.use(express.json());

// Định nghĩa Schema & Model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, min: 0 }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

// API POST /users
app.post('/users', async (req, res) => {
  try {
    const { name, age } = req.body;
    if (!name) return res.status(400).json({ error: 'name is required' });

    const user = new User({ name, age });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// API GET /users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Kết nối DB rồi mới khởi động server
async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Kết nối MongoDB thành công');
    app.listen(PORT, () => {
      console.log(`Server chạy tại http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Không thể kết nối MongoDB', err);
    process.exit(1);
  }
}
start();
