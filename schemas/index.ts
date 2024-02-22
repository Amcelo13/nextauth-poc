import * as z from 'zod';

export const LoginSchema = z.object({
    email : z.string().email({ message: 'Invalid email format'}),
    password : z.string().min(6, {message: 'Password must be at least 6 characters'})
})

export const RegisterSchema = z.object({
    email : z.string().email({ message: 'Invalid email format'}),
    password : z.string().min(6),
    confirmPassword : z.string().min(6)
})