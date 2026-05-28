import { Link } from "react-router-dom"
import { useTaskStore } from "../store/useTaskStore"
import InputTask from "../components/common/input"




export default function Tasks() {
  const { tasks, toggleTask, removeTask } = useTaskStore()

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-zinc-400">Your Tasks</h1>
      
      <div className="space-y-4">
        {tasks.map(task => (
          <div 
            key={task.id} 
            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <input 
                type="checkbox" 
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <Link 
                to={`/tasks/${task.id}`}
                className={`text-lg transition-colors ${
                  task.completed ? 'line-through text-gray-400' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {task.title}
              </Link>
            </div>
            
            <button 
              onClick={() => removeTask(task.id)}
              className="px-3 py-1 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {tasks.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No tasks yet. Add one!</p>
      )}
      <InputTask/>
    </div>


  )
}
