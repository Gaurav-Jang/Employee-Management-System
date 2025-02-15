import React from "react";

const NewTask = ({ data }) => {
  console.log(data);
  // ✅ Prevent errors by setting default values
  const title = data?.taskTitle || "No Title";
  const category = data?.category || "Uncategorized";
  const date = data?.taskDate || "No Date";
  const description = data?.taskDescription || "No Description Available";

  console.log("Task Title:", title); // Logs only valid values

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{category}</h3>
        <h4 className="text-sm">{date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
      <p className="text-sm mt-2">{description}</p>
      <div className="mt-4">
        <button>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
