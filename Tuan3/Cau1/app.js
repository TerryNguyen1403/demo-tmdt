// Nhập module math.js
const math = require('./math');

// Sử dụng các hàm đã export
console.log(math.add(100, 52));      // Kết quả: 152
console.log(math.subtract(100, 52)); // Kết quả: 48

// Nếu dùng ES6

import {
    add,
    substract
} from './math'

console.log(add(100, 52));      // Kết quả: 152
console.log(substract(100, 52)); // Kết quả: 48