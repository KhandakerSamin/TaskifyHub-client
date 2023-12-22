/* eslint-disable react/prop-types */

import { Draggable } from "react-beautiful-dnd";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ singledata, index }) => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleDelete = (e) => {
        e.preventDefault(); // Correct typo here
        const taskId = singledata._id;

        Swal.fire({
            title: "Are you sure to Cancel it?",
            text: "You won't be able to revert this",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic
                    .delete(`/tasks/${taskId}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            // Task deleted successfully
                            // refetch();
                            navigate('/dashboard')
                            
                            Swal.fire({
                                title: "Task Deleted!",
                                text: "Task deleted successfully.",
                                icon: "success"
                            });
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting task:", error);
                        // Handle error as needed

                        Swal.fire({
                            title: "Error",
                            text: "Error deleting task.",
                            icon: "error"
                        });
                    });
            }
        });
    };





    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;

        const updatedData = {
            title: title,
            description: description,
            deadline: deadline,
            priority: priority
        }
        console.log(updatedData);
        axiosPublic.patch(`/tasks/${singledata._id}`, updatedData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    console.log('booking updated to the database');
                    toast.success('Your Booking Information Updated !')
                    // reset();
                    // navigate('/')
                }
            })
            .catch(err => {
                console.log(err);
            })
    }







    return (
        <Draggable draggableId={singledata._id.toString()} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="mb-5 mt-3 mx-2"
                >
                    <div className="group relative block h-20 sm:h-30 lg:h-64 mx-2 bg-slate-800">
                        <span className="absolute inset-0 border-2 border-dashed border-black"></span>

                        <div
                            className="relative flex h-full transform items-start border-2 border-black bg-blue-950 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                        >
                            <div
                                className="p-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:px-6 pt-6 pb-2"
                            >
                                 <p className="pt-1 text-white/50 p-1 rounded-l-lg text-sm ">Task - {index+1}</p>

                                <h2 className="mt-1 text-md text-white font-medium sm:text-xl">{singledata.title}</h2>
                                <h2 className="mt-4 text-md text-red-600  font-medium sm:text-md">Deadline: {singledata.deadline}</h2>
                                <p className="mt-4 font-bold text-md uppercase">Priority: {singledata.priority}</p>
                                <p className="pt-7 text-white/50 text-sm ">Hover for more functionality</p>
                            </div>

                            <div
                                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                            >
                                <p className="mt-4 pb-2 h-2/3 text-sm sm:text-base">
                                    <span className="font-bold text-md ">Task Desciption:</span> {singledata.description}
                                </p>
                                <hr />

                                <div className="flex justify-between pt-8 items-center">
                                    <button onClick={() => document.getElementById('my_modal_6').showModal()} className="btn btn-outline">Edit</button>
                                    <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-2xl mb-6 text-white text-center">Add Your Task </h3>
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-2">
                                                    <label className="sr-only" htmlFor="name">Title</label>
                                                    <input
                                                        className="w-full rounded-lg border-gray-200 text-white p-3 text-sm"
                                                        placeholder="Title"
                                                        type="text"
                                                        id="title"
                                                        name="title"
                                                        defaultValue={singledata?.title}
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
                                                        defaultValue={singledata.description}
                                                    ></textarea>
                                                </div>
                                                <div className="flex justify-between items-center gap-x-2">
                                                    <div className="w-1/2">
                                                        <select
                                                            name="priority"
                                                            id="priority"
                                                            className=" w-full rounded-lg border-gray-300  p-3 text-white sm:text-sm"
                                                            required
                                                            defaultValue={singledata.priority}
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
                                                            defaultValue={singledata.deadline}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="modal-action flex justify-between items-center">
                                                    <button onSubmit={handleSubmit} className="btn btn-outline hover:bg-transparent hover:text-white hover:font-bold px-6">Edit Task</button>
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}


                                                        <button className="btn btn-outline hover:bg-transparent hover:text-white hover:font-bold ">Close</button>

                                                    </form>
                                                </div>
                                            </form>

                                        </div>
                                    </dialog>
                                    <button onClick={handleDelete} className="btn btn-outline">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default TaskCard;
