import 'dotenv/config';
import { SignOptions, sign } from 'jsonwebtoken';

export const jwtSign = (payloadToken: any, options: SignOptions) => {
  const { JWT_HASH } = process.env;
  return sign(payloadToken, String(JWT_HASH), options);
};
