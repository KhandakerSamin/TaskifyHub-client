import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className="w-[280px]  h-[100vh] sticky top-0  p-[35px] bg-[#1c2536] ">
                <div className='mb-7'>
                    <Link to='/'><h1 className='text-2xl font-bold text-white mt-5'>TaskifyHUB</h1></Link>
                    <p>All your task solution</p>
                </div>
                <hr />
                <div className='my-10 flex flex-col justify-center space-y-4'>
                    <NavLink className='btn btn-outline hover:bg-transparent hover:text-white hover:text-lg' to='/dashboard'>Platform Launch</NavLink>
                    <NavLink className='btn btn-outline hover:bg-transparent hover:text-white hover:text-lg' to='/dashboard/roadmap'>Roadmap</NavLink>
                </div>
                <hr />
                <div className='my-10 flex flex-col justify-center space-y-4'>
                    <NavLink className='btn btn-outline hover:bg-transparent hover:text-white hover:text-lg' to='/'>Home</NavLink>
                    <NavLink className='btn btn-outline hover:bg-transparent hover:text-white hover:text-lg' to='/about'>About</NavLink>
                    <NavLink className='btn btn-outline hover:bg-transparent hover:text-white hover:text-lg' to='/contactUs'>Contact Us</NavLink>
                </div>
            </div>
            <div className="flex-1">
               
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;