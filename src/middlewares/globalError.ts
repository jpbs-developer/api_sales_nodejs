import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';

export default function globalErrorMiddleware(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({ message: 'Internal Server Error' });
}
