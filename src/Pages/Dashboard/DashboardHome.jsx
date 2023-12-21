import { FaPlus } from "react-icons/fa6";

const DashboardHome = () => {
    const handleNewTask = e => {
        e.preventDefault()
        const form = e.target 
        const title = form.title.value;
        const description = form.description.value;
        const priority = form.priority.value;
        const deadline = form.deadline.value;
        const type = "toDo"

        const newTask = {
            title,
            description,
            priority,
            deadline,
            type
        }

        console.log(newTask);

    }
    return (
        <div>
            <nav className='h-20 flex justify-between items-center bg-[#1c2536]'>
                <div>
                    <h1 className='text-white font-bold text-2xl mx-10 py-5 '>Platform Launch</h1>
                </div>
                <button onClick={() => document.getElementById('my_modal_5').showModal()} className='bg-blue-700 rounded-2xl w-fit h-12 flex justify-center items-center mx-5'>
                    <h1 className='text-white font-bold mx-auto px-7 flex justify-between items-center gap-x-3'> <FaPlus className='text-xl' /> Add New Task</h1>
                </button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-2xl mb-6 text-white text-center">Add Your Task </h3>
                        <form onSubmit={handleNewTask}>
                            <div className="mb-2">
                                <label className="sr-only" htmlFor="name">Title</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 text-white p-3 text-sm"
                                    placeholder="Title"
                                    type="text"
                                    id="title"
                                    name="title"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="sr-only" >Description</label>

                                <textarea
                                    className="w-full rounded-lg border-gray-200 text-white p-3 text-sm"
                                    placeholder="Description"
                                    rows="4"
                                    id="description"
                                    name="description"
                                ></textarea>
                            </div>
                            <div className="flex justify-between items-center gap-x-2">
                                <div className="w-1/2">
                                    <select
                                        name="priority"
                                        id="priority"
                                        className=" w-full rounded-lg border-gray-300  p-3 text-white sm:text-sm"
                                    >
                                        <option value="">Select Priority</option>
                                        <option value="low">Low</option>
                                        <option value="moderate">Moderate</option>
                                        <option value="high">High</option>
                                       
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <label className="sr-only" htmlFor="name">Deadline</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 text-white p-3 text-sm"
                                        placeholder="Title"
                                        type="date"
                                        id="deadline"
                                        name="deadline"
                                    />
                                </div>
                            </div>
                        <div className="modal-action flex justify-between items-center">
                        <button onSubmit={handleNewTask} className="btn btn-outline hover:bg-transparent hover:text-white hover:font-bold px-6">Add Task</button>
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}


                                <button className="btn btn-outline hover:bg-transparent hover:text-white hover:font-bold ">Close</button>

                            </form>
                        </div>
                        </form>
                        
                    </div>
                </dialog>
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