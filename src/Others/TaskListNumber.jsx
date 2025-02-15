import React from "react";

function TaskListNumber({ data }) {
  return (
    <div className="flex gap-5 mt-10 justify-between screen">
      <div className="py-6 px-9 w-[45%] bg-red-400 rounded-xl ">
        <h2 className="text-2xl font-semibold">{data.taskNo.newTaskNo}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="py-6 px-9 w-[45%] bg-blue-400 rounded-xl ">
        <h2 className="text-2xl font-semibold">
          {data.taskNo.completedTaskNo}
        </h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="py-6 px-9 w-[45%] bg-green-400 rounded-xl ">
        <h2 className="text-2xl font-semibold">{data.taskNo.activeTaskNo}</h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>
      <div className="py-6 px-9 w-[45%] bg-yellow-400 rounded-xl ">
        <h2 className="text-2xl font-semibold">{data.taskNo.failedTaskNo}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;
