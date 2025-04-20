import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginData = z.infer<typeof LoginSchema>;

export const RegisterServerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  address: z.string().optional(),
  phone: z.string().optional(),
});

export type RegisterServerData = z.infer<typeof RegisterServerSchema>;

export const RegisterSchema = RegisterServerSchema.extend({
  confirmPassword: z.string().min(6),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
});

export type RegisterData = z.infer<typeof RegisterSchema>;
