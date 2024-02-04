import React, { useEffect, useState } from 'react'
import './RemindersPage.scss'

import ReminderTable from '../../components/ReminderTable/ReminderTable'
import AddReminder from '../../components/AddReminder/AddReminder'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RemindersPage() {

  const [reminderData, setReminderData] = useState([]);
  const [updateTable, setUpdateTable] = useState(false);
  const [compFilter, setCompFilter] = useState("all")
  const [catFilter, setCatFilter] = useState("all")

  const baseURL = 'http://localhost:8080/reminders';
  const navigate = useNavigate();

  useEffect(() => {
    getReminders()
  }, [updateTable])

  const getReminders = () => {
    axios.get(`${baseURL}`).then((data) => {
      console.log(data)
      setReminderData(data.data)
    })
  }

  const applyFilterStatus = (selection) => {

    if (selection === "current") {
      setCompFilter("current")
    }
    else if (selection === "complete") {
      setCompFilter("complete")
    }
    else {
      setCompFilter("all")
    }

    axios
      .get(`${baseURL}?status=${selection}&category=${catFilter}`)
      .then((res) => {
        console.log(res)
        setReminderData(res.data)
        navigate(
          `/reminders?status=${selection}&category=${catFilter}`
        );
      })
  }

  const applyFilterCategory = (selection) => {

    if (selection === "personal") {
      setCatFilter("personal")
    }
    else if (selection === "work") {
      setCatFilter("work")
    }
    else if (selection === "school") {
      setCatFilter("school")
    }
    else {
      setCatFilter("all")
    }

    axios
      .get(`${baseURL}?status=${compFilter}&category=${selection}`)
      .then((res) => {
        console.log(res)
        setReminderData(res.data)

        navigate(
          `/reminders?status=${compFilter}&category=${selection}`
        );
      })

  }

  return (
    <div className='reminders'>
      <div className='reminders__top'>
        <h1 className='reminders__header'>Reminders</h1>
        <div className='reminders__filters'>

          <div className='reminders__statfilter'>
            <p
              className='reminders__filter'
              onClick={() => { applyFilterStatus('all') }}
            >All
            </p>
            <p
              className='reminders__filter'
              onClick={() => { applyFilterStatus('current') }}
            >Current
            </p>
            <p
              className='reminders__filter reminders__filter--last'
              onClick={() => { applyFilterStatus('complete') }}
            >Complete
            </p>
          </div>

          <div className='reminders__catfilter'>
            <p
              className='reminders__filter'
              onClick={() => { applyFilterCategory('all') }}
            >
              All
            </p>
            <p
              className='reminders__filter'
              onClick={() => { applyFilterCategory('personal') }}
            >Personal</p>
            <p
              className='reminders__filter'
              onClick={() => { applyFilterCategory('work') }}
            >Work</p>
            <p
              className='reminders__filter reminders__filter--last'
              onClick={() => { applyFilterCategory('school') }}
            >School</p>
          </div>

        </div>

      </div>

      <ReminderTable reminderData={reminderData} />

      <AddReminder setUpdateTable={setUpdateTable} updateTable={updateTable} />

    </div>
  )
}

export default RemindersPage