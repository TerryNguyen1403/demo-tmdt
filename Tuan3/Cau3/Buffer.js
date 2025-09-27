import { Buffer } from 'buffer';

// Tạo một Buffer có kích thước 10 byte
const buf1 = Buffer.alloc(10);
buf1.write('My name is Giang');
console.log(buf1.toString());

// Tạo một Buffer có kích thước 10 byte và khởi tạo tất cả các byte với giá trị 1
const buf2 = Buffer.alloc(10, 1);
console.log(buf2);

// Tạo Buffer từ một mảng
const buf3 = Buffer.from([1, 2, 3]);
console.log(buf3.readInt8(0));
console.log(buf3.readInt8(1));
console.log(buf3.readInt8(2));
// Throws RangeError
// console.log(buf3.readInt8(3));

// Tạo unintialized Buffer có kích thước 10 bytes
const buf4 = Buffer.allocUnsafe(10);

// chuỗi bytes mặc định
console.log('Mặc định: ', buf4);

// Fill bytes với một giá trị cụ thể
buf4.fill(2);
console.log('Sau khi fill (dạng bytes): ', buf4);
// Dùng destructuring để hiển thị các phần tử trong buffer
console.log('Sau khi fill (dạng number): ',[...buf4]);