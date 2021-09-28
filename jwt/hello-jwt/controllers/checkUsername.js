module.exports = (req, _res, next) => {
  const { username } = req.body;
  if (username.length < 5 || typeof username !== 'string') {
    return next({
        statusCode: 422,
        message: 'Username invalid',
      }); 
  }
  next();
};