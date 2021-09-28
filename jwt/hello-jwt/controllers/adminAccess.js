const jwt = require('jsonwebtoken');

const secret = 'xablau';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({
      statusCode: 401,
      message: 'Unauthorized',
    });
  }
  try {
    const decoded = jwt.verify(token, secret);
    res.status(200).json({ username: decoded.username, admin: decoded.admin });
  } catch (error) {
    next({
      statusCode: 401,
      message: 'Unauthorized',
    });
  }
};