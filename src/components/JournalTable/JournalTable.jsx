import React from 'react'
import JournalRow from '../JournalRow/JournalRow'

import './JournalTable.scss'

const JournalTable = ({ journalData }) => {
    return (
        <div className='journalTable'>

            <div className='journalTable__columns'>
                <div className='journalTable__col journalTable__col--title'>Title</div>
                <div className='journalTable__col journalTable__col--entry'>Entry Date</div>
            </div>

            <div className='journalTable__body'>
                {journalData.map((row) => {
                    return <JournalRow
                        key={row.id}
                        id={row.id}
                        title={row.title}
                        entryDate={row.entry_date}
                    />
                })}
            </div>

        </div>
    )
}

export default JournalTable