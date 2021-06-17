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
      .post('/echo')
      .send('hello');

    expect(res.status).toEqual(200);
    expect(res.text).toEqual('hello');
  });
  
  test('/red, GET html with an h1 and the word red', async() => {

    const res = await request(app)
      .get('/red');

    expect(res.text).toEqual('<h1>red</h1>');
  });

  test('/green, GET html with an h1 and the word green', async() => {

    const res = await request(app)
      .get('/green');

    expect(res.text).toEqual('<h1>green</h1>');
  });
  
  test('/blue, GET html with an h1 and the word blue', async() => {

    const res = await request(app)
      .get('/blue');

    expect(res.text).toEqual('<h1>blue</h1>');
  });
});

describe('promise routes', () => {
  test('/index.html, GET content from index.html file under public directory', async() => {

    const res = await request(app)
      .get('/index.html');

    expect(res.text).toEqual('<h1>Hello!</h1>');
  });

  test('/index, return 404 Not Found error', async() => {

    const res = await request(app)
      .get('/index');

    expect(res.text).toEqual('Not Found');
  });
});
