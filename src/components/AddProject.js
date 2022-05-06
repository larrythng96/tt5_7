import { useState } from 'react'

const AddProject = ({ onAdd, user_id }) => {
  const [name, setName] = useState('')
  const [budget, setBudget] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add a project')
      return
    }

    onAdd({ name, budget, description, user_id })

    setName('')
    setBudget('')
    setDescription('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Add Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Budget</label>
        <input
          type='text'
          placeholder='Add Budget'
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Description</label>
        <input
          type='text'
          placeholder='Add Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Project' className='btn btn-block' />
    </form>
  )
}

export default AddProject
