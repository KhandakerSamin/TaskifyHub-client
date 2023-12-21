import { Link } from "react-router-dom";
import img from '../../public/Images/giphy.gif'
const Banner = () => {

    


    return (
        <div className='bg-gradient-to-r from-slate-950 via-blue-950 to-slate-800 w-full h-[600px] flex justify-between items-center'>
            <div className='py-36 w-1/2 ml-36 mr-16'>
                <h1 className='text-4xl font-bold pb-3'>Empower Your Productivity: </h1>
                 <h1 className='text-4xl font-bold pb-3'>TaskifyHub - Your Central Hub for</h1>
                 <h1 className='text-4xl font-bold '>Seamless Task Management</h1>
                <Link to='/dashboard'><button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn text-xl font-bold text-slate-900 mt-8">
                Let’s Explore
                </button></Link>
            </div>
            <div className='w-1/2 mx-auto ml-10'>
                <img src={img} alt="" />
            </div>

        </div>
    );
};

export default Banner;
