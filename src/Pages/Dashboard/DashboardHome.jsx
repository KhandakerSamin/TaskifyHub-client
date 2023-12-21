import { FaPlus } from "react-icons/fa6";

const DashboardHome = () => {
    return (
        <div>
            <nav className='h-20 flex justify-between items-center bg-[#1c2536]'>
                <div>
                    <h1 className='text-white font-bold text-2xl mx-10 py-5 '>Platform Launch</h1>
                </div>
                <div className='bg-blue-700 rounded-2xl w-fit h-12 flex justify-center items-center mx-5'>
                    <h1 className='text-white font-bold mx-auto px-7 flex justify-between items-center gap-x-3'> <FaPlus className='text-xl' /> Add New Task</h1>

                </div>
            </nav>
            <div className="grid grid-cols-4 m-5">
                <div className="border-r-4 h-screen">
                    <div className="bg-white w-36 mx-auto flex items-center justify-center h-8 rounded-3xl my-4">
                        <h1 className="text-red-500 text-lg font-bold px-5 py-2  ">To Do (3)</h1>
                    </div>
                </div>
                <div className="border-r-4 h-screen">
                    <div className="bg-white w-40 mx-auto flex items-center justify-center h-8 rounded-3xl my-4">
                        <h1 className="text-blue-500 text-lg font-bold px-5 py-2  ">On Going (3)</h1>
                    </div>
                </div>
                <div className="border-r-4 h-screen">
                    <div className="bg-white w-40 mx-auto flex items-center justify-center h-8 rounded-3xl my-4">
                        <h1 className="text-green-600 text-lg font-bold px-5 py-2  ">Completd (3)</h1>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default DashboardHome;