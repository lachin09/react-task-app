

export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About TaskApp</h1>
      <div className="prose prose-blue lg:prose-xl text-gray-600 dark:text-zinc-400 space-y-6">
        <p>
          This project was created as a demonstration of a modern React stack. 
          It utilizes <strong>Vite</strong> for extremely fast development and building, 
          <strong>Tailwind CSS</strong> for utility-first styling, and 
          <strong>Zustand</strong> for lightweight and performant state management.
        </p>
        <p>
          The architecture follows common best practices like:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>PascalCase naming for components and files.</li>
          <li>Surgical state management using hooks.</li>
          <li>Semantic HTML and accessible UI components.</li>
          <li>Clean separation between business logic (stores) and UI (components).</li>
        </ul>
      </div>
    </div>
  )
}
