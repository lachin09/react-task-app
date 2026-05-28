import { useParams, Link } from "react-router-dom"
import { useTaskStore } from "../store/useTaskStore"

/**
 * REFACTOR NOTES:
 * 1. Used the store to find the specific task by ID.
 * 2. Added Tailwind CSS for a cleaner detailed view.
 * 3. Added a "Back to Tasks" link.
 * 4. Handled the case where a task is not found.
 */

export default function TaskDetail() {
  const { id } = useParams()
  const { tasks } = useTaskStore()
  
  const task = tasks.find(t => t.id === parseInt(id))

  if (!task) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Task not found!</h2>
        <Link to="/tasks" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to task list
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <Link to="/tasks" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        &larr; Back to Tasks
      </Link>
      
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900">Task Details</h1>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          task.completed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {task.completed ? 'Completed' : 'In Progress'}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</label>
          <p className="text-lg font-mono text-gray-700">#{task.id}</p>
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</label>
          <p className="text-2xl text-gray-800">{task.title}</p>
        </div>
      </div>
    </div>
  )
}
