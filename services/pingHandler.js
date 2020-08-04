'use strict';

module.exports.ping = function(event, context, callback) {

  let body;
  let statusCode = 200;

  try {
    body = { data: 'success' };
  } catch (err) {
      statusCode = 400;
      body = err.message;
  } finally {
      body = JSON.stringify(body);
  }

  const response = {
    statusCode,
    body,
  };


  callback(null, response);
};
