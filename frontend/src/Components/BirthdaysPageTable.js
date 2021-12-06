import { Table } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../store'

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
            key: 'firstName'
        },
        {
            title: 'Lastname',
            dataIndex: 'lastName',
            key: 'lastName'
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
                dataSource={todaysBirthdays}
            />
        </>
    )
}

export default BirthdaysPageTable