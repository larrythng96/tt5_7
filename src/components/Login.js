import { useState } from 'react'

const Login = () => {
    const [inputUsername, setinputUsername] = useState('')
    const [inputPassword, setinputPassword] = useState('')
  
    const Login = (e) => {
      e.preventDefault()
    }
  
    return (
      <form className='login-page' onSubmit={Login}>
        <div className='form-control'>
          <label>Username</label>
          <input
            type='text'
            placeholder='Enter username'
            value={inputUsername}
            onChange={(e) => setinputUsername(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Password</label>
          <input
            type='text'
            placeholder='Enter password'
            value={inputPassword}
            onChange={(e) => setinputPassword(e.target.value)}
          />
        </div>
  
        <input type='submit' value='Login' className='btn btn-block' />
      </form>
    )
  }

export default Login;