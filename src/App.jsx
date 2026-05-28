import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import TaskDetail from './pages/TaskDetail'
import Tasks from './pages/Tasks'
import NavBar from './components/layout/NavBar'
import About from './pages/About'
import Layout from './components/layout/Layout'
import Photos from './pages/Photos'

export default function App() {
  return (
    <Routes>
     <Route element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="tasks" element={<Tasks />} />
  <Route path="tasks/:id" element={<TaskDetail />} />
  <Route path="photos" element={<Photos/>}/>
</Route>
      <Route path="*" element={<NotFound />} /> 
    </Routes>
 
)}
