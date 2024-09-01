import { Request, Response, NextFunction } from 'express';
import { auth } from './firebaseadmin';

export interface CustomRequest extends Request {
    user?: any; 
  }
const verifyToken = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1];

  if (!idToken) {
    return res.status(403).send('No token provided');
  }

  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(403).send('Unauthorized');
  }
};

export default verifyToken;