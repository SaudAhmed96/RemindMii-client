import React from 'react'
import './JournalRow.scss'
import { useNavigate } from 'react-router-dom'

const JournalRow = ({ id, title, entryDate }) => {

    const navigate = useNavigate();
    const realDate = new Date(entryDate)
        .toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })

    return (
        <div className='journalRow' onClick={() => { navigate(`/journal/entry/${id}`) }}>
            <div className='journalRow__row journalRow__row--title'>{title}</div>
            <div className='journalRow__row journalRow__row--entry'>{realDate}</div>
        </div>
    )
}

export default JournalRow