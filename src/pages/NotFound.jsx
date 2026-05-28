import { Link } from "react-router-dom"

/**
 * REFACTOR NOTES:
 * 1. Added a visual "404" page with Tailwind.
 */

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <h1 className="text-9xl font-black text-gray-200">404</h1>
      <p className="text-2xl font-bold text-gray-800 -mt-8 mb-8">Page Not Found</p>
      <Link 
        to="/" 
        className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-4"
      >
        Go back home
      </Link>
    </div>
  )
}
