import { create } from 'zustand'


export const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, title: 'Learn React', completed: false },
    { id: 4, title: 'Learn Tailwind', completed: false },
    { id: 2, title: 'Master Zustand', completed: false },
    { id: 3, title: 'Build something cool', completed: false },
  ],
  
  // Actions
  addTask: (title) => set((state) => ({
    tasks: [...state.tasks, { id: Date.now(), title, completed: false }]
  })),
  
  toggleTask: (id) => set((state) => ({
    tasks: state.tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  })),
  
  removeTask: (id) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== id)
  })),
}))
