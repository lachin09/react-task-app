import { Link } from "react-router-dom"
import Card from "../components/common/card"





export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between py-10 text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        Organize your work <br />
        <span className="text-blue-600">simpler and faster</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-white max-w-2xl mb-10">
        A simple task management application built with React, Zustand, and Tailwind CSS to demonstrate modern web development patterns.
      </p>
      <div className="flex space-x-4">
        <Link 
          to="/tasks" 
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
        >
          View Tasks
        </Link>
        <Link 
          to="/about" 
          className="px-8 py-3 bg-white text-gray-700 dark:bg-gray-700 dark:text-white font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          Learn More
        </Link>
        <Link 
          to="/photos" 
          className="px-8 py-3 bg-white text-gray-700 dark:bg-gray-700 dark:text-white font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          View Photos
        </Link>
      </div>
    </div>  
  )
}
