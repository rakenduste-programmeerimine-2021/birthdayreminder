import { Table } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Popconfirm, notification } from 'antd'
import { withRouter } from "react-router"
import { useContext } from 'react'
import { Context } from '../store'
import axios from 'axios'
import { deleteBirthday } from '../store/actions'

function AllBirthdaysTable(){
    const [ state, dispatch ] = useContext(Context)
    const token = state.auth.token

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
                <Popconfirm
                    title='Are you sure?'
                    onConfirm={() => handleDelete(e._id)}
                    >
                    <DeleteOutlined style={{ color:'red', cursor:'pointer' }} />
                </Popconfirm>
            )
        },
        {
            title: 'Edit',
            render: (e) => (
                <EditOutlined />
            )
        }
    ]

    const handleDelete = async (id) => {
        const response = await axios.delete(`http://localhost:8082/api/bday/delete-birthday/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })  
        notification.success({ message: 'Birthday deleted!'})
        dispatch(deleteBirthday(response.data)) 
    }

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