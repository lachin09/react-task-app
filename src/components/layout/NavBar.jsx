import { NavLink } from "react-router-dom";
import useThemeStore from "/src/store/useThemeStore.js";

export default function NavBar() {
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-colors ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    }`;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <div className="font-bold text-xl text-blue-600">
            TaskApp
          </div>

          <div className="flex items-center space-x-4">

            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>

            <NavLink to="/tasks" className={linkClass}>
              Tasks
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
           <NavLink to="/photos" className={linkClass}>
              Photos
            </NavLink>
            <button
              onClick={toggleTheme}
              className="px-3 py-2 rounded bg-black text-white dark:bg-white dark:text-black"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
}