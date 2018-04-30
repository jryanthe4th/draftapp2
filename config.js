var fs = require('fs');

var configPath = './config.json';
var parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

// We have to export each object in order to access them separately
exports.mailgun = parsed.mailgun;
exports.port = parsed.port;
exports.twilio = parsed.twilio;
