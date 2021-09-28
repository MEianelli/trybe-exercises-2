const ping = require('./ping');
const login = require('./login');
const checkUsername = require('./checkUsername');
const checkPassword = require('./checkPassword');
const adminAccess = require('./adminAccess');
const topSecret = require('./topSecret');

module.exports = {
  ping,
  login,
  checkUsername,
  checkPassword,
  adminAccess,
  topSecret,
};
