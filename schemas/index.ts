import { z } from "zod";
 
export const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Your emain is invalid!'
  }),
  password: z.string().min(1),
})

export const registerFormSchema = z.object({
  email: z.string().email({
    message: 'Email is required!',
  }),
  password: z.string().min(6, {
    message: 'Password length must be at least 6 characters!',
  }),
  name: z.string().min(1, {
    message: 'Name is required!',
  })
})