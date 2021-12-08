import { Table } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../store'
import './UpcomingBirthdaysTable.css'

function UpcomingBirthdaysTable(){
    const [ state, ] = useContext(Context)
    const [ upcomingBdays, setUpcomingBdays ] = useState([])
    let dateToday = new Date()
    let monthToday = dateToday.getMonth()+1 //+1 because the return values are 0-11
    let dayToday = dateToday.getDate()

    function sortOutTodaysBirthdays(){
        let allBirthdaysFromState = []
        let upcomingBirthdays = []
        let fullDate
        allBirthdaysFromState = state.birthdays.data
        allBirthdaysFromState.forEach(element => {
            let day, month
            fullDate = element.birthDay.split('-')
            day = parseInt(fullDate[0])
            month = parseInt(fullDate[1])
            if(month === monthToday){
                if(day > dayToday && day <= dayToday+7){
                    upcomingBirthdays.push(element)
                }
            }
        })
        setUpcomingBdays(upcomingBirthdays)
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
            fixed: true,
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
            title: 'Birthday',
            dataIndex: 'birthDay',
            key: 'birthDay',
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
            fixed: 'right',
            render: (e) => (
                <EditOutlined className='edit-button' />
            )
        }
    ]


    return(
        <>
            <Table
                className='upcoming-birthdays-table'
                columns={columns}
                rowKey='_id'
                dataSource={upcomingBdays}
                scroll={{ x: 350 }}
                bordered
                pagination={false} 
                showSorterTooltip={false}
                size="middle"
            />
        </>
    )
}

export default UpcomingBirthdaysTable