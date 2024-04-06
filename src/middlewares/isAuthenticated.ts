import 'dotenv/config';
import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('JWT token is missing.');
  }

  const [_, token] = authHeader.split(' ');
  const { JWT_HASH } = process.env;
  try {
    verify(token, String(JWT_HASH));
    return next();
  } catch (error) {
    throw new AppError('Invalid JWT token');
  }
}
