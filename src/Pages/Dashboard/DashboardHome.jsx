import { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import TaskCard from "../../Components/TaskCard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const DashboardHome = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const [todo, setTodo] = useState([])
    const [onGoing, setOnGoing] = useState([])
    const [completed, setCompleted] = useState([])

    const handleNewTask = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value;
        const description = form.description.value;
        const priority = form.priority.value;
        const deadline = form.deadline.value;
        const type = "toDo"
        const userEmail = user?.email;

        const newTask = {
            title,
            description,
            priority,
            deadline,
            type,
            userEmail
        }

        console.log(newTask);

        axiosPublic.post('/tasks', newTask)
            .then(res => {
                if (res.data.insertedId) {
                    console.log('Task added to database');
                    toast.success('Task added Successfully !')
                    form.reset();
                    // navigate('/')
                }
            })

    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get('/tasks');
                const allData = res.data;

                const filteredTodoData = allData.filter(item => item.type === 'toDo');
                const filteredOnGoingData = allData.filter(item => item.type === 'onGoing');
                const filteredCompletedData = allData.filter(item => item.type === 'Completed');

                setTodo(filteredTodoData);
                setOnGoing(filteredOnGoingData);
                setCompleted(filteredCompletedData);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, [axiosPublic]);








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
                                    required
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
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-between items-center gap-x-2">
                                <div className="w-1/2">
                                    <select
                                        name="priority"
                                        id="priority"
                                        className=" w-full rounded-lg border-gray-300  p-3 text-white sm:text-sm"
                                        required
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
                                        required
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
                <Droppable droppableId="TodoList">

                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="border-r-4 h-screen">
                            <div className="bg-white w-36 mx-auto flex items-center justify-center h-8 rounded-3xl my-4">
                                <h1 className="text-red-500 text-lg font-bold px-5 py-2  ">To Do ({todo.length})</h1>
                            </div>

                            {
                                todo.map((singledata,index) => <TaskCard key={singledata._id} index={index} singledata={singledata}></TaskCard>)
                            }
                            {provided.placeholder}
                        </div>
                    )}



                </Droppable>
                <Droppable droppableId="OnGoingList">

                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="border-r-4 h-screen">
                            <div className="bg-white w-36 mx-auto flex items-center justify-center h-8 rounded-3xl my-4">
                                <h1 className="text-blue-500 text-lg font-bold px-1 py-2  ">On Going ({onGoing.length})</h1>
                            </div>

                            {
                                onGoing.map((singledata,index) => <TaskCard key={singledata._id} index={index} singledata={singledata}></TaskCard>)
                            }
                            {provided.placeholder}
                        </div>
                    )}



                </Droppable>
                <Droppable droppableId="CompletedList">

                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="border-r-4 h-screen">
                            <div className="bg-white w-36 mx-auto flex items-center justify-center h-8 rounded-3xl my-4">
                                <h1 className="text-green-500 text-lg font-bold px-1 py-2  ">Completed ({completed.length})</h1>
                            </div>

                            {
                                completed.map((singledata,index) => <TaskCard key={singledata._id} singledata={singledata} index={index}></TaskCard>)
                            }
                            {provided.placeholder}
                        </div>
                    )}



                </Droppable>




            </div>
        </div>
    );
};

export default DashboardHome;