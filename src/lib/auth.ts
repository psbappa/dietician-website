import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) throw new Error('Please define JWT_SECRET in .env');

// If your token payload is known, define an interface
export interface MyJwtPayload extends JwtPayload {
  userId: string;
  email: string;
}

export function signToken(payload: MyJwtPayload, options?: SignOptions) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d', ...options });
}

export function verifyToken(token: string): MyJwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as MyJwtPayload;
  } catch {
    return null;
  }
}