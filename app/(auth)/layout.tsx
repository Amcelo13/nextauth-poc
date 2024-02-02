const AuthLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='bg-red text-white'>
            <nav>
                This is shared Navbar for all auth pages
            </nav>
            {children}
        </div>
    )
}
export default AuthLayout;
