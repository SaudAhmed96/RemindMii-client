import React from 'react'
import './RemindersPage.scss'

import ReminderTable from '../../components/ReminderTable/ReminderTable'
import AddReminder from '../../components/AddReminder/AddReminder'

function RemindersPage() {
  return (
    <div className='reminders'>
      <h1 className='reminders__header'>Reminders</h1>

      <ReminderTable />

      <AddReminder />

    </div>
  )
}

export default RemindersPage