const http = require('http'); 
http.createServer((req, res) => { 
const cookies = req.headers.cookie; 
res.writeHead(200, {'Content-Type': 'text/plain'}); 
res.end(`Cookies from request: ${cookies || 'No cookies found'}`); 
}).listen(3000, () => console.log('Server running on port 3000'));