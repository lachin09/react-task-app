
import {useEffect}from 'react';
import useThemeStore from "/src/store/useThemeStore.js";


export default function ThemeProvider({children}) {
    const { darkMode, toggleTheme } = useThemeStore();

   useEffect(()=>{

    const root=document.documentElement;

    if(darkMode){
        root.classList.add('dark');
        localStorage.setItem('theme','dark');

    }

    else{
        root.classList.remove('dark');
        localStorage.setItem('theme','light');
    }
   },[darkMode]);
return children;} 