/* ===================================
   SERVER - I7 DIGITAL
   Servidor Node.js simples para backend
   =================================== */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Configuration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
};

// Create server
const server = http.createServer((req, res) => {
  // Parse URL
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  
  // Handle API routes
  if (pathname.startsWith('/api/')) {
    handleApiRequest(req, res, pathname);
    return;
  }
  
  // Handle static files
  handleStaticFile(req, res, pathname);
});

// Handle API requests
function handleApiRequest(req, res, pathname) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle OPTIONS request (preflight)
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // Contact form endpoint
  if (pathname === '/api/contact' && req.method === 'POST') {
    handleContactForm(req, res);
    return;
  }
  
  // Newsletter endpoint
  if (pathname === '/api/newsletter' && req.method === 'POST') {
    handleNewsletter(req, res);
    return;
  }
  
  // 404 - API endpoint not found
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'API endpoint not found' }));
}

// Handle contact form submission
function handleContactForm(req, res) {
  let body = '';
  
  req.on('data', chunk => {
    body += chunk.toString();
  });
  
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      
      // Validate data
      if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing required fields' }));
        return;
      }
      
      // Log contact form data (in production, save to database or send email)
      console.log('Contact Form Submission:');
      console.log('------------------------');
      console.log(`Name: ${data.name}`);
      console.log(`Email: ${data.email}`);
      console.log(`Phone: ${data.phone}`);
      console.log(`Service: ${data.service}`);
      console.log(`Message: ${data.message}`);
      console.log(`Date: ${new Date().toISOString()}`);
      console.log('------------------------\n');
      
      // Save to file (optional)
      saveContactToFile(data);
      
      // Send success response
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ 
        success: true, 
        message: 'Mensagem enviada com sucesso!' 
      }));
      
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  });
}

// Handle newsletter subscription
function handleNewsletter(req, res) {
  let body = '';
  
  req.on('data', chunk => {
    body += chunk.toString();
  });
  
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      
      // Validate email
      if (!data.email || !isValidEmail(data.email)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid email address' }));
        return;
      }
      
      // Log newsletter subscription
      console.log('Newsletter Subscription:');
      console.log('------------------------');
      console.log(`Email: ${data.email}`);
      console.log(`Date: ${new Date().toISOString()}`);
      console.log('------------------------\n');
      
      // Save to file (optional)
      saveNewsletterToFile(data.email);
      
      // Send success response
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ 
        success: true, 
        message: 'Inscrição realizada com sucesso!' 
      }));
      
    } catch (error) {
      console.error('Error processing newsletter:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  });
}

// Handle static files
function handleStaticFile(req, res, pathname) {
  // Default to index.html
  if (pathname === '/') {
    pathname = '/index.html';
  }
  
  // Build file path
  const filePath = path.join(__dirname, '..', pathname);
  
  // Get file extension
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  // Read and serve file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // 404 - File not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
      } else {
        // 500 - Server error
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 - Internal Server Error</h1>');
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

// Save contact form data to file
function saveContactToFile(data) {
  const dataDir = path.join(__dirname, 'data');
  const filePath = path.join(dataDir, 'contacts.json');
  
  // Create data directory if it doesn't exist
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  // Read existing data
  let contacts = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    contacts = JSON.parse(fileContent);
  }
  
  // Add new contact
  contacts.push({
    ...data,
    timestamp: new Date().toISOString()
  });
  
  // Save to file
  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
}

// Save newsletter subscription to file
function saveNewsletterToFile(email) {
  const dataDir = path.join(__dirname, 'data');
  const filePath = path.join(dataDir, 'newsletter.json');
  
  // Create data directory if it doesn't exist
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  // Read existing data
  let subscribers = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    subscribers = JSON.parse(fileContent);
  }
  
  // Check if email already exists
  if (!subscribers.some(sub => sub.email === email)) {
    // Add new subscriber
    subscribers.push({
      email,
      timestamp: new Date().toISOString()
    });
    
    // Save to file
    fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));
  }
}

// Validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Start server
server.listen(PORT, HOST, () => {
  console.log('=================================');
  console.log('   I7 DIGITAL - SERVER RUNNING');
  console.log('=================================');
  console.log(`Server: http://${HOST}:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Started: ${new Date().toLocaleString()}`);
  console.log('=================================\n');
});

// Handle server errors
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
  } else {
    console.error('Server error:', error);
  }
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\nSIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\nSIGINT received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

// Made with Bob
