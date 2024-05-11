const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ 
    target: 'https://5wag0qdts4.execute-api.us-east-1.amazonaws.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/prod' // rewrite path to remove "/api" prefix
    }
}));

const port = 3000;
app.listen(port, () => {
    console.log(`Proxy server is listening on port ${port}`);
});
