'use server';

import { z } from 'zod';
import { loginFormSchema } from '@/schemas';

export const login = async (values: z.infer<typeof loginFormSchema>) => {
  const validatedFields = loginFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  return { succes: 'Email sent!' };
};
