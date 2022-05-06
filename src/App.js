import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import AddProject from './components/AddProject'
import About from './components/About'

const App = () => {
  const [showAddProject, setShowAddProject] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      const projectsFromServer = await fetchProjects()
      setProjects(projectsFromServer)
    }

    getProjects()
  }, [])

  // Stub Data
  const currentUser = {
    "id": 1,
    "username": "user101",
    "password": "123456",
    "name": "Jacky",
    "appointment": "Project Lead"
  }

  // Fetch Projects
  const fetchProjects = async () => {
    const res = await fetch('http://localhost:5000/projects')
    let data = await res.json()

    data = data.filter((projects) => (projects.user_id == currentUser.id))

    return data
  }

  // Fetch Project
  const fetchProject = async (id) => {
    const res = await fetch(`http://localhost:5000/projects/${id}`)
    const data = await res.json()

    return data
  }

  // Add Project
  const addProject = async (project) => {
    const res = await fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })

    const data = await res.json()

    setProjects([...projects, data])
  }

  // Delete Project
  const deleteProject = async (id) => {
    const res = await fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setProjects(projects.filter((project) => project.id !== id))
      : alert('Error Deleting This Project')
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddProject(!showAddProject)}
          showAdd={showAddProject}
        />
        <Routes>
          <Route
            path='/projects'
            element={
              <>
                {showAddProject && <AddProject onAdd={addProject} user_id={currentUser.id} />}
                {projects.length > 0 ? (
                  <Projects
                    projects={projects}
                    onDelete={deleteProject}
                  />
                ) : (
                  'No Projects To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
