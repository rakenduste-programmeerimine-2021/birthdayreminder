import { Table } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Popconfirm, notification } from 'antd'
import { withRouter } from "react-router"
import { useContext } from 'react'
import { Context } from '../store'
import axios from 'axios'
import { deleteBirthday } from '../store/actions'
import './AllBirthdaysTable.css'

function AllBirthdaysTable(){
    const [ state, dispatch ] = useContext(Context)
    const token = state.auth.token

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
        },
        {
            title: 'Delete',
            width: 60,
            render: (e) => (
                <Popconfirm
                    title='Are you sure?'
                    onConfirm={() => handleDelete(e._id)}
                    >
                    <DeleteOutlined className='delete-button' />
                </Popconfirm>
            )
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
                className='all-birthdays-table'
                columns={columns}
                rowKey='_id'
                dataSource={state.birthdays.data}
                scroll={{ x: 500 }}
                bordered
                showSorterTooltip={false}
                size="middle"
            />
        </>
    )
}

export default withRouter(AllBirthdaysTable)