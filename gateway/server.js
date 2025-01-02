const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy routes
app.use('/api/leads', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/api/contacts', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
// Add more proxies for other services as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});