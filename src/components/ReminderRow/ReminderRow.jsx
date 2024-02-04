import React, { useEffect, useState } from 'react'
import './ReminderRow.scss'
import axios from 'axios';

const ReminderRow = ({ remID, task, category, finish_date, hours, status, user_id }) => {

  const baseURL = 'http://localhost:8080/reminders';

  const realDate = new Date(finish_date)
    .toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })

  const [pageLoad, setPageLoad] = useState(false);
  const [categoryVal, setCategoryVal] = useState(category)
  const [timeVal, setTimeVal] = useState(hours)
  const [finishDate, setFinishDate] = useState(realDate)
  const [taskVal, setTaskVal] = useState(task)


  const updateVariable = (event, setFormVar) => {
    setFormVar(event.target.value)
    // console.log(timeVal)
  }

  useEffect(() => {
    if (pageLoad) {
      updateReminder()
    }
    else {
      setPageLoad(true)
    }
  }, [])

  const updateReminder = () => {

    const loadData = {
      task: taskVal || task,
      category: categoryVal,
      finish_date: finish_date.slice(0, finish_date.indexOf('.')).replace('T', ' '),
      hours: timeVal || hours
    }

    if (task && timeVal) {
      axios
        .put(`${baseURL}/${remID}`, loadData)
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    // else {
    //   alert("Please do not leave empty values")
    // }
  }

  const isMouseGone = (event) => {
    console.log(event)
    if (taskVal === "") {
      setTaskVal(task)
    }
    if (timeVal === "") {
      setTimeVal(hours)
    }
    updateReminder()
  }

  //lets highlight green if status is complete when we add that filter
  const setComplete = () => {
    // this will set it to complete and do a put request in back end
    setPageLoad(true);

    axios
      .put(`${baseURL}/complete/${remID}`)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const checkDupVal = (val) => {
    return categoryVal === val ? "" : <option>{val}</option>
  }

  return (
    <tr className='row'>
      <td className='row__data row__data--first' onClick={setComplete}>X</td>
      <td className='row__data row__data--start'>
        <textarea
          className='row__data-inputTask'
          type='text'
          maxLength={200}
          value={taskVal}
          onBlur={() => { isMouseGone() }}
          onChange={(event) => { updateVariable(event, setTaskVal) }
          }
        />
      </td>
      <td className='row__data row__data--category'>
        <select className='row__data-inputDrop'
          value={categoryVal}
          onChange={(event) => { updateVariable(event, setCategoryVal) }}
        >
          <option>{categoryVal}</option>
          {checkDupVal("Personal")}
          {checkDupVal("Work")}
          {checkDupVal("School")}
        </select>

      </td>
      <td className='row__data  row__data--date'>
        {/* {realDate} */}
        <textarea
          className='row__data-inputDate'
          type='text'
          maxLength={12}
          value={finishDate}
          onBlur={() => { isMouseGone() }}
          onChange={(event) => { updateVariable(event, setFinishDate) }
          }
        />
      </td>
      <td className='row__data'>
        <input
          className='row__data-inputTime'
          type='number'
          maxLength={3}
          value={timeVal}
          onBlur={(event) => { isMouseGone() }}
          onChange={(event) => { updateVariable(event, setTimeVal) }}
        />
      </td>
      <td className='row__data'></td>
    </tr>
  )
}

export default ReminderRow
