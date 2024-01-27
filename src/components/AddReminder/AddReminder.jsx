import React from 'react'
import './AddReminder.scss'

const AddReminder = () => {

  //send data to backend to get new row
  const submitForm = (e) => {
    e.preventDefault();
  }

  return (
    <div className='addRem'>
      <h1 className='addRem__header'>Add Reminder</h1>
      <form className='addRem__form' onSubmit={submitForm}>
        <label className='addRem__label'>New Task</label>
        <input className='addRem__input' type='text' />

        <label className='addRem__label'>Category</label>
        <select className='addRem__input'>
          <option>Personal</option>
          <option>Work</option>
          <option>School</option>
        </select>

        <label className='addRem__label'>Date</label>
        <input className='addRem__input' type='date' />

        <label className='addRem__label'>Time</label>
        <input className='addRem__input' type='text' />

        <button className='addRem__submit' type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default AddReminder