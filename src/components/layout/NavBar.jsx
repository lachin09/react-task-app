import { NavLink } from "react-router-dom";
import useThemeStore from "/src/store/useThemeStore.js";
import { useState } from "react";

export default function NavBar() {
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const [isOpen,setIsOpen]=useState(false);


  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-colors ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    }`;

  return (

    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors">
      <div className="container mx-auto p-4 flex items-center justify-between">
        
          <button className="md:hidden  px-3 py-2 rounded bg-black text-white dark:bg-white dark:text-black"
           onClick={()=>setIsOpen(!isOpen)}>

            {isOpen?"X":"MENU"}
           </button>


          <div className="font-bold text-xl text-blue-600">
            TaskApp
          </div>

          <div className="hidden md:flex  gap-4">
            
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
          

          </div>


            <button
              onClick={toggleTheme}
              className="px-3 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:bg-yellow-800 dark:hover:bg-gray-400 "
            >
              {darkMode ? "☀️" : "🌙"}
            </button>


           </div>




            { isOpen && (
              <div> 
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
              </div>
            )}
          
            

    
    </nav>
  );
}