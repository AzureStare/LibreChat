const express = require('express');
const router = express.Router();

// Import endpoint routers
const codegptRouter = require('./codegpt');

// Register endpoint routes
if (process.env.ENABLE_CODEGPT === 'true') {
  router.use('/codegpt', codegptRouter);
}

module.exports = router; 