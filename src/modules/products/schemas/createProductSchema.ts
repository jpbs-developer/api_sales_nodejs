import { z } from 'zod';

export const createProductSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a number',
    }),
    quantity: z.number({
      required_error: 'Quantity is required',
      invalid_type_error: 'Quantity must be a number',
    }),
  }),
});
