import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  try {
    const token = req.header('x-auth-token');
    if (!token)
      return res.status(401).send({ message: 'No authentication token, authorization denied.' });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.status(401).send({ message: 'Token verification failed, authorization denied.' });
    }

    req.user = verified.id;

    next();
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export default auth;
