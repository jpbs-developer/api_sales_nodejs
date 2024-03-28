import { z } from 'zod';
import { createProductSchema } from './createProductSchema';

export const updateProductSchema = createProductSchema.extend({
  params: z.object({
    id: z.string().uuid('Invalid product id'),
  }),
});
