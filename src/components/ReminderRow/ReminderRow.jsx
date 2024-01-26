import React from 'react'

const ReminderRow = ({remID, task, category, finish_date, hours, status, user_id}) => {

    const realDate = new Date().toLocaleDateString('en-us', {  year:"numeric", month:"short", day:"numeric"}) 
  return (
    <tr>
        <td></td>
        <td>{task}</td>
        <td>{category}</td>
        <td>{realDate}</td>
        <td>{hours}</td>
    </tr>
  )
}

export default ReminderRow