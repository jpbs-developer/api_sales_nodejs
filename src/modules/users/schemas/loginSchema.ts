import { z } from 'zod';

export const loginSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required!' }).email(),
    password: z
      .string({
        required_error: 'Password is required!',
        invalid_type_error: 'Password must be a string!',
      })
      .min(4, 'Password must be at least 4 characters'),
  }),
});
