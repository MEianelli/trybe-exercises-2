module.exports = (req, _res, next) => {
  const { password } = req.body;
  if (password.length < 5 || typeof password !== 'string') {
    return next({
      statusCode: 422,
      message: 'Password invalid',
    }); 
  }
  next();
};