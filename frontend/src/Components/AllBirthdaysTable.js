import { Table } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { withRouter } from "react-router"
import { useContext } from 'react'
import { Context } from '../store'

function AllBirthdaysTable(){
    const [ state, ] = useContext(Context)
    const [ birthday, setBirthday] = useState([])

    let dateToday = new Date()
    let yearToday = dateToday.getFullYear() 
    let monthToday = dateToday.getMonth()+1 //+1 because the return values are 0-11
    let dayToday = dateToday.getDate()

    useEffect(() => {
        calculateAge()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function calculateAge(){
        let birthdays = []
        let fullDate
        birthdays = state.birthdays.data
        birthdays.forEach(element => {
            let day, month, year, age
            fullDate = element.birthDay.split('-')
            day = parseInt(fullDate[0])
            month = parseInt(fullDate[1])
            year = parseInt(fullDate[2])
            age = yearToday - year
            if(month >= monthToday){
                if(day >= dayToday){
                    age -=1
                }
            }
            element['age'] = age
        })
        setBirthday(birthdays)
    }
    

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
            title: 'Delete',
            render: (e) => (
                <DeleteOutlined />
            )
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
                dataSource={birthday}
            />
        </>
    )
}

export default withRouter(AllBirthdaysTable)