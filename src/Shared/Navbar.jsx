import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const NavBar = () => {


    const { user, logOut } = useContext(AuthContext)


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
                Swal.fire({
                    title: "Logged Out!",
                    text: "Your Account logged Out Successfully",
                    icon: "success"
                });
            }
        });
    }


    const navLinks = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-violet-400 underline underline-offset-4 text-lg font-medium  " : "text-md font-normal text-white"
        }>Home</NavLink></li>

        <li><NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-violet-400 underline underline-offset-4 text-lg font-medium " : "text-md font-medium text-white"
        }>About</NavLink></li>
        <li><NavLink to="/contactUs" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-violet-400 underline underline-offset-4 text-lg font-medium " : "text-md font-medium text-white"
        }>Contact Us</NavLink></li>
    </>

    return (
        <div className="drawer w-full lg:max-w-screen-2xl fixed z-10 mx-auto">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full py-2 max-w-screen mx-auto px-20 lg:px-[150px] flex justify-between items-center navbar bg-black bg-opacity-40  text-black">
                    <div className=" lg:hidden text-white">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="  min-w-max mx-2">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
                                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-white pl-3">TaskifyHUB</h1>
                    </div>
                    <div className=" hidden ml-64 flex-none  lg:block">
                        <ul className="menu flex justify-center items-center menu-horizontal">
                            {/* Navbar menu content here */}
                            {navLinks}
                        </ul>
                    </div>


                    <div className="drawer flex justify-end mr-4 drawer-end">

                        {/* theme toggle */}

                        {/* <button onClick={toggleTheme} className="pl-2 md:px-5 normal-case">
                            {theme === "light" ? <MdDarkMode className='text-3xl text-white mt-1'></MdDarkMode> : <MdLightMode className='text-white text-3xl mt-1'></MdLightMode>}
                        </button> */}

                        <div>
                            {
                                user ? <> <div className="flex justify-between items-center "> <img className='rounded-full w-[35px] md:w-[40px] h-[35px]  md:h-[40px] ' src={user?.photoURL} alt='' />
                                    <h1 className="text-white w-1/3">{user?.displayName}</h1> <button onClick={handleLogOut}><li className='btn text-white   btn-outline hover:bg-transparent hover:text-white hover:text-md'><a>Log Out</a></li></button></div></>
                                    : <NavLink to='/login'><li className='btn text-white ml-3  btn-outline hover:bg-transparent hover:text-white hover:text-md'><a>Log in</a></li></NavLink>
                            }
                        </div>
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button ">

                            </label>

                        </div>
                        <div className="drawer-side ">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 space-y-3 bg-[#1c2536] w-80 min-h-full  text-white ">
                                {/* Sidebar content here */}
                                <h1 className='text-md font-semibold mx-auto border-b-4 border-white text-base'>Your Profile Info : </h1>
                                <li className="text-xl font-bold"> <img className='h-24 w-28 mx-auto' src={user?.photoURL} alt='Profile I' /></li>
                                <li className="text-xl font-bold text-center">{user?.displayName}</li>
                                <li className="text-xs font-bold text-center">Email: {user?.email}</li>
                                <NavLink to='/dashboard'><li><a className="text-base btn btn-outline text-white md:text-lg mt-4 font-normal md:font-bold"> Dashboard</a></li></NavLink>
                                <div className='flex justify-between items-center gap-x-2'>
                                    <NavLink to='/login'><button className="btn btn-outline text-white  normal-case mt-5 text-base ">Switch Account</button></NavLink>
                                    {
                                        user ? <button className='btn btn-outline mt-5 normal-case w-1/2 text-white text-base  ' onClick={handleLogOut}><NavLink><li><a>Log Out</a></li></NavLink></button>
                                            : <NavLink to='/login'><li><a>Log in</a></li></NavLink>
                                    }
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 bg-slate-900 w-60 min-h-full ">
                    {/* Sidebar content here */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;