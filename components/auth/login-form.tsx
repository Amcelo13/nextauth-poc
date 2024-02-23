'use client'

import { CardWrapper } from '@/components/auth/card-wrapper'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { LoginSchema } from '@/schemas'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input' 
import { Button } from '@/components/ui/button' 
import { FormError } from '@/components/form-error'
import { FormSucess } from '@/components/form-success'
import { login } from '@/actions/login'
import { useState, useTransition } from 'react'

const LoginForm = () => {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const method = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const { reset, getValues, handleSubmit, control, register, formState: { errors } } = method;

    const submit = (data: z.infer<typeof LoginSchema>) => {
        setError('')
        setSuccess('')
        startTransition(()=> {
            login(data).then((res:any)=>{
                setError(res.error)
                setSuccess(res.success)
            })
        })
    }
    return (
        <CardWrapper
            headerLabel='Welcome Back'
            backButtonLabel="Don't have an account?"
            backButtonHref='/auth/register'
            showSocial
        >
            <FormProvider {...method}>
                <form className='space-y-6 w-full'
                    onSubmit={handleSubmit(submit)}>
                    <div className='space-y-4'>
                        <FormField control={control} name={'email'}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor='email' className='text-semibold text-3xl'>Email</FormLabel>
                                    <FormControl>
                                        <Input disabled={isPending} {...field} placeholder='john.doe@gmail.com' type='email' />
                                    </FormControl>
                                    <FormMessage className='text-xl'>{errors.email?.message}</FormMessage>
                                </FormItem>
                            )
                            } />
                        <FormField control={control} name={'password'}  
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-semibold text-3xl'>Password</FormLabel>
                                    <FormControl>
                                        <Input  disabled={isPending} {...field}  type='password' />
                                    </FormControl>
                                    <FormMessage className='text-xl'>{errors.password?.message}</FormMessage>
                                </FormItem>
                            )
                            } />
                    </div>
                    <FormError message ={error}/>
                    <FormSucess message ={success}/>

                    <Button 
                    size={'xl'}
                    type='submit' 
                    className='w-full pt-3 pb-3'
                    disabled={isPending}
                    >
                                LogIn
                    </Button>
                </form>
            </FormProvider>

        </CardWrapper>
    )
}

export default LoginForm