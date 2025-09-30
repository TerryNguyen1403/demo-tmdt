// const http = require('http');
// ES6 import
import http from 'http';
const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
    // Log dữ liệu header của request
    console.log("Request header:", req.headers);

    // Lấy thông tin User-Agent và Accept-Language từ header
    const userAgent = req.headers['user-agent'] || 'Unknown';
    const cookie = req.headers['cookie'] || 'No cookies';
    const acceptLanguage = req.headers['accept-language'] || 'Unknown';

    // Thiết lập header cho phản hồi
    res.writeHead(200, { 
        'Content-Type': 'text/plain',
        'Set-Cookie': [
            'username=Danny; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; HttpOnly',
            'other=value; path=/; HttpOnly'
                ] });
    // Hiển thị thông tin User-Agent, Accept-Language và cookie trong phản hồi
    res.end(`User-Agent: ${userAgent}\nAccept-Language: ${acceptLanguage}\nCookie: ${cookie}\nHello World\n`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});