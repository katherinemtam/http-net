const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    console.log('REQ:', request);

    if(request.method === 'GET' && request.path === '/') {
      socket.end(createResponse({ body: 'hi' }));

    } else {
      socket.end(createResponse({ 
        body: 'Not Found', 
        status: '404 Not Found', 
        contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
