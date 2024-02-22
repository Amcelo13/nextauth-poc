import  {CheckCircledIcon} from '@radix-ui/react-icons'

interface FormSuccessProps {
    message?: string
}
export const FormSucess = ({message}: FormSuccessProps) => {
    if(!message) return null
    return (
        <div className='flex items-center gap-x-2 text-base text-emerald-500 bg-emerald-500/15 p-3 rounded-md'>
            <CheckCircledIcon className='h-5 w-5 pt-0.5'/>
                <p>{message}</p>
        </div>
    )
}