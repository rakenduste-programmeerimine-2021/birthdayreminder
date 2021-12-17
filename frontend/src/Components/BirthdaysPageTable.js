import { Table, Popconfirm, notification } from 'antd'
import { BellOutlined } from '@ant-design/icons'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../store'
import axios from 'axios'
import './BirthdaysPageTable.css'

function BirthdaysPageTable(){
   const [ state, ] = useContext(Context)
   const [ todaysBirthdays, setTodaysBirthdays ] = useState([])
   const token = state.auth.token
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
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 50,
        },
        {
            title: 'Send email',
            width: 50,
            fixed: 'right',
            align: 'center',
            render: (e) => (
                <Popconfirm
                    title='Send Email?'
                    onConfirm={() => handleSendEmail(e._id)}
                >
                    <BellOutlined  />
                </Popconfirm>
            )
        }
    ]

    const handleSendEmail = async (id) => {
        try{
            await axios.get(`http://localhost:8082/api/bday/send-congrats/${id}`, {
                headers: {
                    'Authorization':`Bearer ${token}`
                }
            })
            notification.success({
                message: 'Email sent!'
            })
        } catch (error) {
            notification.error({
                message: 'Something went wrong...'
            })
        }
    }


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