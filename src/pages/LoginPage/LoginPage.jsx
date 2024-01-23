import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage( {setSignUp}) {

  const navigate = useNavigate()

  const navSignUp = () =>{
    setSignUp(true)
    navigate('/signup')
  }
  return (
    <div className='login'>
      <h1>RemindMii</h1>
      <h2>Welcome to RemindMii</h2>
      <form className='loginForm'>
        <label className='loginForm__label'>username</label>
        <input type='text'/>

        <label className='loginForm__label'>password</label>
        <input type='password'/>

        <button type='submit'>LOGIN</button>

      </form>

      <h2>No Account? <Link onClick={navSignUp}>Sign Up</Link></h2>
        
    </div>
  )
}

export default LoginPage