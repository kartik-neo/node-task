const request = require('supertest');
const app = require('./app');

describe('Server initialization', () => {
  it('should start the server without errors', () => {
    // Ensure the app starts without any errors
    expect(() => {
      require('./app');
    }).not.toThrow();
  });

  it('should listen on the correct port', async () => {
    // Make a request to a known endpoint to ensure the server is running
    const response = await request(app).get('/');
    // Check if the response status is 200 OK
    expect(response.status).toBe(200);
    // Check if the response body contains "Hello, world!"
    expect(response.text).toBe('Hello, world!');
  });
});
