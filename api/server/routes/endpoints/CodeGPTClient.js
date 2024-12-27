class CodeGPTClient {
  constructor({ apiKey, orgId }) {
    this.apiKey = apiKey;
    this.orgId = orgId;
    this.baseURL = 'https://api.codegpt.co/v1';
  }

  async chat(message, conversationId) {
    const response = await fetch(`${this.baseURL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
        'X-Organization-ID': this.orgId
      },
      body: JSON.stringify({
        message,
        conversation_id: conversationId
      })
    });

    return await response.json();
  }
}

module.exports = { CodeGPTClient }; 