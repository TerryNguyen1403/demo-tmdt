const http = require('http');

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'application/json');
    //GET
    if (req.method === 'GET' && req.url === '/users') {
        res.writeHead(200);
        res.end(JSON.stringify(users));
    }
    //POST
    else if (req.method === 'POST' && req.url === '/users') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newUser = {id: users.length + 1, ...JSON.parse(body) };
            users.push(newUser);
            res.writeHead(201);
            res.end(JSON.stringify(newUser));
        });
    }
    //PUT
    else if (req.method === 'PUT' && req.url.startsWith('/users/')) {
        const id = parseInt(req.url.split('/')[2]);
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const updatedUser = JSON.parse(body);
            let user = users.find(u => u.id == id);
            if (!user) {
                res.writeHead(404);
                return res.end(JSON.stringify({ message: 'User Not Found' }));
            } else {
                user.name = updatedUser.name || user.name;
            }
            res.writeHead(200);
            res.end(JSON.stringify(updatedUser));
        });
    }
    //DELETE
    else if (req.method === 'DELETE' && req.url.startsWith('/users/')) {
        const id = parseInt(req.url.split('/')[2]);
        users = users.filter(user => user.id !== id);
        res.writeHead(204);
        res.end();
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Not Found' }));
    }   
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// To run the server, use the command: node app.js
// You can test the endpoints using tools like Postman or curl.
