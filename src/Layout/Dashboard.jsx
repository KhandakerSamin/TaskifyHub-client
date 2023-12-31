import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure to log out?",
            text: "Once you logout you have to login again",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(res => console.log(res))
                    navigate('/')
                Swal.fire({
                    title: "Logged Out!",
                    text: "Your Account logged Out Successfully",
                    icon: "success"
                });
            }
        });
    }
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
                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                    <a href="#" className="flex items-center gap-2  px-4 pt-4 ">
                        <img
                            alt="Man"
                            src={user?.photoURL}
                            className="h-10 w-10 rounded-full object-cover"
                        />

                        <div>
                            <p className="text-xs ">
                                <strong className="block font-medium text-white">{user?.displayName}</strong>
                            </p>
                        </div>

                    </a>
                    <h1 className='text-xs px-3 pb-3'>{user?.email}</h1>
                </div>
                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 pt-4 p-2">
 
                        <button
                      
                            onClick={handleLogOut}
                            className="group relative flex w-full justify-center text-white items-center  rounded-lg px-2 py-1.5 text-sm gap-x-3 btn btn-outline hover:bg-gray-50 hover:text-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 opacity-75"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>

                            Logout
                        </button>
              
                </div>
            </div>
            <div className="flex-1">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;