import React from 'react'
import { Link, Navigate } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='error'>
      <h2>Error Page</h2>
      <p>Go back to home page: <Link to='/reminders'>Reminders</Link></p>
    </div>
  )
}

export default ErrorPage