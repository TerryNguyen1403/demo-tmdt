// Import express and using router
var express = require('express');
var router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');

// Get all users
router.get('/all-users', async (req, res) => {
  try {
    // Kết nối DB
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db('demo-cau4');
    const usersCol = db.collection('users');

    // Lấy ra các user đang có trong Mongo
    const users = await usersCol.find({}).toArray();

    // Trả về kết quả
    res.status(200).json(users);

    await client.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Xảy ra lỗi');
  }
})

// Get detail
router.get('/:id', async (req, res) => {
  try {
    // Kết nối DB
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db('demo-cau4');
    const usersCol = db.collection('users');

    // Lấy id từ params
    const { id } = req.params;

    // Lấy chi tiết theo id
    const user = await usersCol.findOne({ _id: new ObjectId(id) });

    if (!user) {
      return res.status(404).send('Không tìm thấy user');
    }

    res.status(200).json(user);
    await client.close();

  } catch (error) {
    console.error(error);
    res.status(500).send('Xảy ra lỗi');
  }
})

// Add user
router.post('/add-user', async (req, res) => {
  try {
    // Kết nối DB
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);
    await client.connect();
    
    const db = client.db('demo-cau4');
    const users = db.collection('users');

    // Lấy dữ liệu từ body
    const { userName, userAge } = req.body;

    // Tạo document để insert
    const doc = {
      userName: userName,
      userAge: userAge
    };

    // Thêm dữ liệu vào MongoDB
    const insertResult = await users.insertOne(doc);

    res.status(200).send(`Thêm user mới thành công, ID = ${insertResult.insertedId}`);

    await client.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Xảy ra lỗi');
  }
})

// Update user
router.put('/update/:id', async (req, res) => {
  try {
    // Kết nối DB
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db('demo-cau4');
    const usersCol = db.collection('users');

    // Lấy id từ params
    const { id } = req.params;

    // Lấy dữ liệu từ body
    const { userName, userAge } = req.body;

    // Update dữ liệu
    const result = await usersCol.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          "userName": userName,
          "userAge": userAge
        }
      }
    )

    res.status(200).send('Đã cập nhật xong ' + result.matchedCount + ' dòng');
    await client.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Xảy ra lỗi');
  }
})

// Delete user
router.delete('/delete/:id', async (req, res) => {
  try {
    // Kết nối DB
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db('demo-cau4');
    const usersCol = db.collection('users');

    // Lấy id  từ params
    const { id } = req.params;

    // Xóa user theo id
    const user = await usersCol.deleteOne(
      { _id: new ObjectId(id) }
    );

    res.status(200).send('Xóa thành công')
    await client.close();

  } catch (error) {
    console.error(error);
    res.status(500).send('Xảy ra lỗi');
  }
})

module.exports = router;
