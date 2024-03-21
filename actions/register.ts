'use server';

import { z } from 'zod';
import { registerFormSchema } from '@/schemas';

export const register = async (values: z.infer<typeof registerFormSchema>) => {
  const validatedFields = registerFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  return { succes: 'Email sent!' };
};
