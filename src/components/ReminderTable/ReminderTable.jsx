import './ReminderTable.scss'
import sortIcon from '../../assets/images/icons/sort-24px.svg'

import ReminderRow from '../ReminderRow/ReminderRow';
// import dotenv from 'dotenv'

const ReminderTable = ({ reminderData }) => {

  console.log(reminderData)

  return (

    <table className='rTable'>
      <thead className='rTable__headers'>
        <tr>
          <th className='rTable__title'></th>
          <th className='rTable__title'>Task
            <img src={sortIcon} className='rTable__sort' />
          </th>
          <th className='rTable__title'>Category
            <img src={sortIcon} className='rTable__sort' />
          </th>
          <th className='rTable__title'>Date
            <img src={sortIcon} className='rTable__sort' />
          </th>
          <th className='rTable__title rTable__title--time'>Time
            <img src={sortIcon} className='rTable__sort' />
          </th>
          <th className='rTable__title'></th>
        </tr>
      </thead>
      <tbody className='rTable__body'>
        {reminderData?.map((row) => {
          return <ReminderRow
            key={row.id}
            remID={row.id}
            task={row.task}
            category={row.category}
            finish_date={row.finish_date}
            hours={row.hours}
            status={row.status}
            user_id={row.user_id}
          />

        })}
      </tbody>

    </table>

  )
}

export default ReminderTable