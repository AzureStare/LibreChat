const { Configuration } = require('openai');
const apiCodegpt = require('@api/api-codegpt');

class CodeGPTClient {
  constructor(apiKey, options = {}) {
    this.apiKey = apiKey;
    this.options = options;
    apiCodegpt.auth(apiKey);
  }

  async sendMessage(message, opts = {}) {
    try {
      const response = await apiCodegpt.completionBeta({
        agentId: 'cddd57f6-3f6c-4f58-a1c2-726e48627df9',
        messages: [{ content: message, role: 'user' }]
      });

      return {
        text: response.data,
        messageId: Date.now().toString(),
        conversationId: opts.conversationId || Date.now().toString(),
        parentMessageId: opts.parentMessageId,
      };
    } catch (error) {
      console.error('CodeGPT Error:', error);
      throw error;
    }
  }
}

module.exports = CodeGPTClient;
