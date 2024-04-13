import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address'
  }),
  password: z.string().min(1,{
    message: 'Invalid password address'
  })
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address'
  }),
  password: z.string().min(6,{
    message: 'Minimum 6 character required'
  }),
  name: z.string().min(1,{
    message: "Name is required"
  })
});