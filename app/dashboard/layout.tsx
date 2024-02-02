const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col gap-y-4'>
                <nav className='bg-black text-white p-4'>   
                    This is shared Navbar for all dashboard pages
                </nav>
            {children}
        </div>

    );
}
export default DashBoardLayout;