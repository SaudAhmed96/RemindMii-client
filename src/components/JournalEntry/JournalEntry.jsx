import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './JournalEntry.scss'

export const JournalEntry = () => {

  const [entryData, setEntryData] = useState([])
  const { entryID } = useParams()
  const navigate = useNavigate();
  const baseURL = 'http://localhost:8080/journal'

  useEffect(() => {
    getEntryData()
  }, [])

  const getEntryData = () => {
    console.log(entryID)
    axios
      .get(`${baseURL}/${entryID}`)
      .then((res) => {
        setEntryData(res.data[0])
        console.log(res)
      })
  }
  return (
    <div className='journalEntry'>
      <div className='journalEntry__top'>
        <h1 className='journalEntry__title'>{entryData.title}</h1>
        <p
          className='journalEntry__back'
          onClick={() => { navigate(`/journal`) }}
        >
          Go Back</p>

      </div>

      <p className='journalEntry__date'>{
        new Date(entryData.entry_date)
          .toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })
      }</p>
      <p className='journalEntry__body'>{entryData.entry}</p>
    </div>
  )
}
