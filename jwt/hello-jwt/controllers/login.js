const jwt = require('jsonwebtoken');

const secret = 'xablau';

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
 return next({
    statusCode: 401,
    message: 'User ou password nao informados',
  }); 
}
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  let admin = false;
  if (username === 'admin' && password === 's3nh4S3gur4???') admin = true;

  const token = jwt.sign({ username, password, admin }, secret, jwtConfig);

  res.status(200).json({ username, token, admin });
};
