// Import module events
const EventEmitter = require('events');

// Tạo một instance của EventEmitter
const myEmitter = new EventEmitter();

// Lắng nghe sự kiện 'registered'
myEmitter.on('registered', (user) => {
  console.log(`Đăng ký thành công cho ${user.name} (${user.email})`);
  // Sau khi đăng ký, phát sự kiện gửi email
  myEmitter.emit('sendEmail', user);
});

// Lắng nghe sự kiện 'sendEmail'
myEmitter.on('sendEmail', (user) => {
  setTimeout(() => {
    console.log(`Đã gửi email chào mừng đến ${user.email}`);
    // Phát sự kiện hoàn thành
    myEmitter.emit('done', user);
  }, 1000); // mô phỏng gửi email bất đồng bộ
});

// Lắng nghe sự kiện 'done'
myEmitter.on('done', (user) => {
  console.log(`Quy trình hoàn tất cho ${user.name}.`);
});

// Hàm mô phỏng đăng ký người dùng
function registerUser(name, email) {
  console.log('Đang xử lý đăng ký...');
  setTimeout(() => {
    const user = { name, email };
    myEmitter.emit('registered', user);
  }, 1500); // mô phỏng xử lý bất đồng bộ
}

// Bắt đầu demo
registerUser('Dung', '2254810022@vaa.edu.vn');