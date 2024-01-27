import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ReminderTable.scss'

import ReminderRow from '../ReminderRow/ReminderRow';
// import dotenv from 'dotenv'

const ReminderTable = () => {
  const [reminderData, setReminderData] = useState([]);
  const baseURL = 'http://localhost:8080';

  useEffect(() => {
    getReminders()
  }, [])

  const getReminders = () => {
    axios.get(`${baseURL}/reminders`).then((data) => {
      console.log(data)
      setReminderData(data.data)
    })
  }
  return (

    <table className='rTable'>
      <thead className='rTable__headers'>
        <tr>
          <th className='rTable__title'></th>
          <th className='rTable__title'>Task</th>
          <th className='rTable__title'>Category</th>
          <th className='rTable__title'>Date</th>
          <th className='rTable__title'>Time</th>
        </tr>
      </thead>
      <tbody className='rTable__body'>
        {reminderData.map((row) => {
          return <ReminderRow
            key={row.id}
            remID={row.id}
            task={row.task}
            category={row.category}
            finish_date={row.finish_date}
            hours={row.hours}
            status={row.status}
            user_id={row.user_id}
          />

        })}
      </tbody>

    </table>

  )
}

export default ReminderTable