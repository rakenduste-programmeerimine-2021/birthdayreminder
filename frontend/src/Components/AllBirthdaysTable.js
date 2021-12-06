import { Table } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { withRouter } from "react-router"
import { useContext } from 'react'
import { Context } from '../store'

function AllBirthdaysTable(){
    const [ state, ] = useContext(Context)

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
                dataSource={state.birthdays.data}
            />
        </>
    )
}

export default withRouter(AllBirthdaysTable)