import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './JournalPage.scss'

import AddJournal from '../../components/AddJournal/AddJournal'
import JournalTable from '../../components/JournalTable/JournalTable'
import { Navigate, useNavigate } from 'react-router-dom'

const JournalPage = () => {

    const [journalData, setJournalData] = useState([{}, {}])
    const baseURL = 'http://localhost:8080/journal'
    const navigate = useNavigate();

    useEffect(() => {
        getJournal()
    }, [])

    const getJournal = () => {
        axios.get(baseURL).then((res) => {
            console.log(res)
            setJournalData(res.data)
        })

    }

    return (
        <div className='journal'>
            <h1 className='journal__heading'>Journal</h1>

            <button
                className='journal__add'
                onClick={() => { navigate('/journal/addentry') }}
            >Add Journal</button>

            <JournalTable journalData={journalData} />

        </div>
    )
}

export default JournalPage