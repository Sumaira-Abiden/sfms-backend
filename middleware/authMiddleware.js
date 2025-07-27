import jwt from 'jsonwebtoken'; 
export const verifyToken = (req, res, next) => { // []
  const token = req.headers.authorization;

  if (!token) return res.status(403).json({ error: 'Access denied' });

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
};
