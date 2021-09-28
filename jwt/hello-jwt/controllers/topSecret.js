const jwt = require('jsonwebtoken');

const secret = 'xablau';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({ statusCode: 401, message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    if (!decoded.admin) {
      return next({ statusCode: 403, message: 'Restricted access' });
    }
    res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
  } catch (error) {
    next({
      statusCode: 401,
      message: error.message,
    });
  }
};