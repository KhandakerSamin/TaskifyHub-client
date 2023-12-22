/* eslint-disable react/prop-types */

const TaskCard = ({ singledata }) => {
    return (
        <div className="mb-5 mt-3 mx-2">
            <a href="" className="group relative block h-20 sm:h-30 lg:h-64 mx-2 bg-slate-800">
                <span className="absolute inset-0 border-2 border-dashed border-black"></span>

                <div
                    className="relative flex h-full transform items-start border-2 border-black bg-blue-950 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                >
                    <div
                        className="p-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:px-6 pt-6 pb-2"
                    >
                        <h2 className="mt-4 text-md text-white font-medium sm:text-2xl">{singledata.title}</h2>
                        <h2 className="mt-4 text-md text-red-600  font-medium sm:text-md">Deadline: {singledata.deadline}</h2>
                        <p className="mt-4 font-bold text-md uppercase">Priority: {singledata.priority}</p>
                        <p className="pt-7 font-bold text-sm ">Hover for more funtionality</p>



                    </div>

                    <div
                        className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                    >

                        <p className="mt-4 pb-2 h-2/3 text-sm sm:text-base">
                          <span className="font-bold text-md ">Task Desciption:</span> {singledata.description}
                        </p>
                        <hr />

                        <div className="flex justify-between pt-8 items-center">
                            <button className="btn btn-outline">Edit</button>
                            <button className="btn btn-outline">Delete</button>
                        </div>

                    </div>
                </div>
            </a>
        </div>
    );
};

export default TaskCard;