import fs from "fs";

console.log('Demo Non-blocking in Node.js');

// Đọc file input.txt
fs.readFile('S:/demo-tmdt/Tuan3/Cau3/NonBlocking/input.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

console.log('End of demo');


// Blocking code
// console.log('Demo Blocking in Node.js');

// const data = fs.readFileSync('S:/demo-tmdt/Tuan3/Cau3/NonBlocking/input.txt');
// console.log(data.toString());
// console.log('End of demo');