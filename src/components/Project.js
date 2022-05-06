import { FaTimes } from 'react-icons/fa'

const Project = ({ project, onDelete }) => {
  return (
    <div
      className={`project`}
    >
      <h3>
        {project.name}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(project.id)}
        />
      </h3>
      <p>{project.description}</p>
      <p>Budget: ${project.budget}</p>
    </div>
  )
}

export default Project
