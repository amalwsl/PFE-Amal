const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('Authorization').split('Bearer ')[1] || null;

  if (!token)
    return res.status(401).json({ msg: 'No token, authorization dnied.' });
  try {
    const decoded = jwt.verify(token, '123456789');
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
