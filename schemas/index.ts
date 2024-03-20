import { z } from "zod";
 
export const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Your emain is invalid!'
  }),
  password: z.string().min(1),
})