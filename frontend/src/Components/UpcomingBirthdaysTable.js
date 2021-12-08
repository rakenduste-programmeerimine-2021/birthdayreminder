import { Table } from 'antd'
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
            // https://stackoverflow.com/questions/55808128/how-to-sort-a-table-in-alphabetical-order-with-antd
            sorter:(record1, record2) => {
                return record1.firstName.localeCompare(record2.firstName);
            }
        },
        {
            title: 'Lastname',
            dataIndex: 'lastName',
            key: 'lastName',
            sorter:(record1, record2) => {
                return record1.lastName.localeCompare(record2.lastName);
            }
        },
        {
            title: 'Birthday',
            dataIndex: 'birthDay',
            key: 'birthDay',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 50,
            // I commented it out...so we can test if this version is better
            // fixed: 'right',
        },
    ]


    return(
        <>
            <Table
                className='upcoming-birthdays-table'
                columns={columns}
                rowKey='_id'
                dataSource={upcomingBdays}
                scroll={{ x: 450 }}
                bordered
                pagination={false} 
                showSorterTooltip={false}
                size="middle"
            />
        </>
    )
}

export default UpcomingBirthdaysTable