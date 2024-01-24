import React from 'react'

const AddReminder = () => {
  return (
    <div className='addRem'>
        <h1>Add Reminder</h1>
        <form>
            <label className='addRem__labal'>New Task</label>
            <input className='addRem__input' type='text' />
            
            <label className='addRem__labal'>Category</label>
            <select>
                <option>Personal</option>
                <option>Work</option>
                <option>School</option>
            </select>

            <label className='addRem__labal'>Date</label>
            <input className='addRem__input' type='date' />

            <label className='addRem__labal'>Time</label>
            <input className='addRem__input' type='text' />

            <button>Submit</button>

        </form>
    </div>
  )
}

export default AddReminder