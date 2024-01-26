import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReminderRow from '../ReminderRow/ReminderRow';
// import dotenv from 'dotenv'

const ReminderTable = () => {
    const [reminderData, setReminderData] = useState([]);
    const baseURL = 'http://localhost:8080';

    useEffect(()=>{
        getReminders()
    }, [])

    const getReminders = ()=>{
        axios.get(`${baseURL}/reminders`).then((data)=>{
            console.log(data)
            setReminderData(data.data)
        })
    }
  return (
    <div>
        {/* <h1>ReminderTable</h1> */}
        <table>
          <thead>
            <tr>
                <th></th>
                <th>Task</th>
                <th>Category</th>
                <th>Date</th>
                <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {reminderData.map((row)=>{
                return <ReminderRow 
                    key = {row.id}
                    remID = {row.id}
                    task = {row.task}
                    category = {row.category}
                    finish_date = {row.finish_date}
                    hours = {row.hours}
                    status = {row.status}
                    user_id = {row.user_id}
                />
                
            })}
            
            <tr>
                <td></td>
                <td>Run far away from home and go live in hut</td>
                <td>Personal</td>
                <td>22-Feb-24</td>
                <td>5</td>
            </tr>
          </tbody>

        </table>
    </div>
  )
}

export default ReminderTable