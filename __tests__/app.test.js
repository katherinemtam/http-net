const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  test('/, GET plain text "hi"', async() => {

    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });
  
  test('/echo, POST status code 200 and plain text with the request body', async() => {

    const res = await request(app)
      .post('/echo');

    expect(res.status).toEqual(200);
    expect(res.text).toEqual('hello');
  });
});
