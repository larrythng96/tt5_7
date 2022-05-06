import Project from './Project'

const Projects = ({ projects, onDelete }) => {
  return (
    <>
      {projects.map((project, index) => (
        <Project key={index} project={project} onDelete={onDelete} />
      ))}
    </>
  )
}

export default Projects
