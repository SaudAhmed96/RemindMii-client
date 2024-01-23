import React from 'react'

function SignupPage() {
  return (
    <div className='signup'>
      <h1>RemindMii</h1>
      <h2>Sign Up!</h2>

      <form className='signupForm'>
        <label className='signupForm__label'>First Name</label>
        <input type='text'/>

        <label className='signupForm__label'>Last Name</label>
        <input type='text'/>

        <label className='signupForm__label'>Email</label>
        <input type='email'/>

        <label className='signupForm__label'>username</label>
        <input type='text'/>

        <label className='signupForm__label'>password</label>
        <input type='password'/>

        <button className='signupForm__button' type='submit'>SIGN UP</button>
      </form>

    </div>
  )
}

export default SignupPage