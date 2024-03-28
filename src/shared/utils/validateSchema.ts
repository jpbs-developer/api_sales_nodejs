import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

export const validateZodSchema =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: Error) {
      const errors = error.errors.map((err: Error) => err.message);
      return res.status(400).json(errors);
    }
  };
