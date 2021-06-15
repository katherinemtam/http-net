const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  test('/, GET plain text "hi"', async() => {

    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });
});
