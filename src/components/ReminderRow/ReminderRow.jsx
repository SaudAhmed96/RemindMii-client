import React from 'react'
import './ReminderRow.scss'

const ReminderRow = ({ remID, task, category, finish_date, hours, status, user_id }) => {

  const realDate = new Date(finish_date)
    .toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })

  const setComplete = () => {
    // this will set it to complete and do a put request in back end
    console.log('hi')
  }

  return (
    <tr className='row'>
      <td className='row__data row__data--first' onClick={setComplete}>X</td>
      <td className='row__data row__data--start'>{task}</td>
      <td className='row__data'>{category}</td>
      <td className='row__data'>{realDate}</td>
      <td className='row__data'>{hours}</td>
    </tr>
  )
}

export default ReminderRow