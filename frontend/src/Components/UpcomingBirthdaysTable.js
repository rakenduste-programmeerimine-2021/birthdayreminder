import { Table } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../store'

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
            key: 'firstName'
        },
        {
            title: 'Lastname',
            dataIndex: 'lastName',
            key: 'lastName'
        },
        {
            title: 'Birthday',
            dataIndex: 'birthDay',
            key: 'birthDay'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Edit',
            render: (e) => (
                <EditOutlined />
            )
        }
    ]


    return(
        <>
            <Table
                style={{ width:'90vw', marginLeft: '5vw', marginRight:'5vw'}}
                columns={columns}
                rowKey='_id'
                dataSource={upcomingBdays}
            />
        </>
    )
}

export default UpcomingBirthdaysTable