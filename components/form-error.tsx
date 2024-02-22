import  {ExclamationTriangleIcon} from '@radix-ui/react-icons'

interface FormErrorProps {
    message?: string
}
export const FormError = ({message}: FormErrorProps) => {
    if(!message) return null
    return (
        <div className='flex items-center gap-x-2 text-base text-destructive bg-destructive/15 p-3 rounded-md'>
            <ExclamationTriangleIcon className='h-5 w-5 pt-0.5'/>
                <p>{message}</p>
        </div>
    )
}