const express = require('express');
const router = express.Router();
const { CodeGPTClient } = require('./CodeGPTClient');
const apiCodegpt = require('@api/api-codegpt');

router.post('/chat', async (req, res) => {
  try {
    const { message, conversationId } = req.body;

    // 进行聊天请求
    const response = await apiCodegpt.completionBeta({
      agentId: 'cddd57f6-3f6c-4f58-a1c2-726e48627df9',
      messages: [{ content: message, role: 'user' }]
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 