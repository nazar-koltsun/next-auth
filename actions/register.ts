'use server';

import prismadb from '@/prismadb';
import { z } from 'zod';
import { registerFormSchema } from '@/schemas';

export const register = async (values: z.infer<typeof registerFormSchema>) => {
  const validatedFields = registerFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  const user = await prismadb.user.create({
    data: {
      name: values.name,
      email: values.email,
    },
  });

  return { succes: 'New user registered!', user };
};
