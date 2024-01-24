import React from 'react'
import '../../styles/partials/_global.scss'
import ReminderTable from '../../components/ReminderTable/ReminderTable'
import AddReminder from '../../components/AddReminder/AddReminder'

function RemindersPage() {
  return (
    <div className='reminders'>
        <h1>Reminders</h1>

        < ReminderTable/>

        <AddReminder/>

    </div>
  )
}

export default RemindersPage