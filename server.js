
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/Build a Passenger Counter App/index.html' : req.url;
  
  // Handle CSS files
  if (req.url === '/index.css') {
    filePath = '/Build a Passenger Counter App/index.css';
  }
  
  // Handle JavaScript files
  if (req.url === '/index.js') {
    filePath = '/Build a Passenger Counter App/index.js';
  }
  
  // Handle image files
  if (req.url === '/station.jpg') {
    filePath = '/Build a Passenger Counter App/station.jpg';
  }
  
  const fullPath = path.join(__dirname, filePath);
  
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
      return;
    }
    
    // Set correct content type
    const ext = path.extname(fullPath);
    const contentType = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif'
    }[ext] || 'text/plain';
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

const PORT = 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Preview your HTML at: http://localhost:${PORT}`);
});
