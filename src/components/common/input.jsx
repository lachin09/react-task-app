


import { useRef } from "react";
import { useTaskStore } from "../../store/useTaskStore";

export default function InputTask() {
  const inputRef = useRef();
  const addTask = useTaskStore((state) => state.addTask);

  const handleAddTask = () => {
    const task = inputRef.current.value;

    if (!task) return;

    addTask(task);

    inputRef.current.value = "";
  };

  return (
    <div className="flex items-center mt-6 space-x-4">
      <input ref={inputRef} type="text" placeholder="Enter a new task..." className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button  onClick={handleAddTask} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Add Task
      </button>
    </div>
  );
}


