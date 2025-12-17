'use strict';

module.exports = function (app) {
  const arithmetic = require('./controller');
  
  // Changed this from /arithmetic to /calculate to match client.js
  app.route('/calculate').get(arithmetic.calculate);
};