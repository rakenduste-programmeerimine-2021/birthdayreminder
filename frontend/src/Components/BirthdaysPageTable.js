import { Table } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../store'
import './BirthdaysPageTable.css'

function BirthdaysPageTable(){
   const [ state, ] = useContext(Context)
   const [ todaysBirthdays, setTodaysBirthdays ] = useState([])
   let dateToday = new Date()
   let monthToday = dateToday.getMonth()+1 //+1 because the return values are 0-11
   let dayToday = dateToday.getDate()

    function sortOutTodaysBirthdays(){
        let birthdaysFromState = []
        let todaysBdays = []
        let fullDate
        birthdaysFromState = state.birthdays.data
        birthdaysFromState.forEach(element => {
            let day, month
            fullDate = element.birthDay.split('-')
            day = parseInt(fullDate[0])
            month = parseInt(fullDate[1])
            if(day === dayToday && month === monthToday){
                todaysBdays.push(element)
            }
        })
        setTodaysBirthdays(todaysBdays)
    }

    useEffect(() => {
        sortOutTodaysBirthdays()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const columns = [
        {
            title: 'Firstname',
            dataIndex: 'firstName',
            key: 'firstName',
            sorter:(record1, record2) => {
                return record1.firstName > record2.firstName
            }
        },
        {
            title: 'Lastname',
            dataIndex: 'lastName',
            key: 'lastName',
            sorter:(record1, record2) => {
                return record1.firstName > record2.firstName
            }
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 50,
        },
        {
            title: 'Edit',
            width: 50,
            render: (e) => (
                <EditOutlined className='edit-button' />
            )
        }
    ]


    return(
        <>
            <Table
                className='todays-birthdays-table'
                columns={columns}
                rowKey='_id'
                dataSource={todaysBirthdays}
                bordered
                pagination={false} 
                showSorterTooltip={false}
                size="middle"
            />
        </>
    )
}

export default BirthdaysPageTable