import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({ message: 'Invalid email format' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' })
})

export const RegisterSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: 'Invalid email format' }),
    password: z.string().min(6),
    confirmPassword: z.string().min(6)
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords does not match'
})