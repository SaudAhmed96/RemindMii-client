import React, { useEffect, useRef, useState } from 'react'
import './AddReminder.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddReminder = ({ setUpdateTable, updateTable }) => {

  const baseURL = 'http://localhost:8080'
  const navigate = useNavigate();

  //Recording variables
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [longTranscript, setLongTranscript] = useState("")
  const [cleanLongTranscript, setCleanLongTranscript] = useState("")
  const recognitionRef = useRef(null);

  //Form variables
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [time, setTime] = useState("");



  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [])

  //function for updating form variables
  const updateVariable = (event, setFormVar) => {
    setFormVar(event.target.value)
  }

  //functions for recording
  const startRecording = () => {
    setIsRecording(true);
    setRecordingComplete(false)

    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event) => {
      const { transcript } = event.results[event.results.length - 1][0]

      setTranscript(transcript)
      setLongTranscript(event.results)
    }

    recognitionRef.current.start()
  }

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setRecordingComplete(true);
      setTranscript("")

      let sentenceString = []

      for (let i = 0; i < longTranscript.length; i++) {
        sentenceString.push(longTranscript[i][0].transcript)
      }
      setCleanLongTranscript(sentenceString.join(' '))
      setTask(sentenceString.join(' '))
    }
  }

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    }
    else {
      stopRecording();
    }
  }

  //send data to backend to get new row
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task && finishDate && time) {
      axios
        .post(
          `${baseURL}/reminders`,
          {
            task,
            category: category || "Personal",
            finish_date: finishDate + " 00:00:00",
            hours: time,
            user_id: 1,
            status: "Not Started"
          },
          { headers: { "Content-Type": "application/json" }, }
        )
        .then((res) => {
          console.log(res)
          setUpdateTable(!updateTable)
          setTask("")
          setCategory("")
          setFinishDate("")
          setTime("")
          setTranscript("")
          setRecordingComplete(false)

        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      console.log(task, category, finishDate, time)
      alert("Please make sure all fields are filled before submission")
    }
  }

  return (
    <div className='addRem'>
      <h1 className='addRem__header'>Add Reminder</h1>

      <div className='addRem__record'>
        <button onClick={handleToggleRecording} className='addRem__record-button'>
          {isRecording ? "Stop" : "Record Task"}
        </button>
        {(transcript && !recordingComplete) &&
          (
            <p className='addRem__record-transcript'>
              {transcript}
            </p>
          )}
      </div>
      <div className='addRem__record-task'>
        {(recordingComplete) &&
          (
            <p className='addRem__record-transcript'>
              {cleanLongTranscript}
            </p>
          )}
      </div>

      <form className='addRem__form' onSubmit={handleSubmit}>
        <label className='addRem__label'>New Task</label>
        <input
          className='addRem__input'
          type='text'
          placeholder='Task Description'
          value={task}
          onChange={(event) => { updateVariable(event, setTask) }}
        />

        <label className='addRem__label'>Category</label>
        <select className='addRem__input'
          value={category}
          onChange={(event) => { updateVariable(event, setCategory) }}
        >
          <option>Personal</option>
          <option>Work</option>
          <option>School</option>
        </select>

        <label className='addRem__label'>Date</label>
        <input
          className='addRem__input'
          type='date'
          value={finishDate}
          onChange={(event) => { updateVariable(event, setFinishDate) }}
        />

        <label className='addRem__label'>Time</label>
        <input
          className='addRem__input'
          type='text'
          value={time}
          onChange={(event) => { updateVariable(event, setTime) }}
        />

        <button className='addRem__submit' type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default AddReminder