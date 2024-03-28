import { z } from 'zod';

export const deleteProductSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid product id'),
  }),
});
export const showProductSchema = deleteProductSchema.extend({});
