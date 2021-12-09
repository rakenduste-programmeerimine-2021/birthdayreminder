import { Button, Input, Table } from 'antd'
import { DeleteOutlined, EditOutlined, SearchOutlined, CloseOutlined } from '@ant-design/icons'
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
            },

            // Inspired by: https://www.youtube.com/watch?v=uatpXRlR4zo
            filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
                return(
                    <>
                        <Input 
                            autoFocus
                            placeholder='Search...'
                            value={selectedKeys[0]}
                            onChange={(e) => {
                                setSelectedKeys(e.target.value?[e.target.value]:[])
                                confirm({closeDropdown: false}) // It'll search and show the results while you type
                            }}
                            onPressEnter={() => {confirm()}}
                            onBlur={() => {confirm()}}
                            className='all-birthdays-search-field'
                        />
                        <div>
                            <Button onClick={() => {confirm()}}>
                                <SearchOutlined className='search-button'/>
                            </Button>
                            <Button onClick={() => {clearFilters()}}>
                                <CloseOutlined className='clear-button'/>
                            </Button>
                        </div>
                    </>
                )
            },
            filterIcon: () => {
                return(<SearchOutlined />)
            },
            onFilter:(value, record) => {
                return(record.firstName.toLowerCase().includes(value.toLowerCase()))
            },

        },
        {
            title: 'Lastname',
            dataIndex: 'lastName',
            key: 'lastName',
            sorter:(record1, record2) => {
                return record1.lastName.localeCompare(record2.lastName);
            },

            // Inspired by: https://www.youtube.com/watch?v=uatpXRlR4zo
            filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
                return(
                    <>
                        <Input 
                            autoFocus
                            placeholder='Search...'
                            value={selectedKeys[0]}
                            onChange={(e) => {
                                setSelectedKeys(e.target.value?[e.target.value]:[])
                                confirm({closeDropdown: false}) // It'll search and show the results while you type
                            }}
                            onPressEnter={() => {confirm()}}
                            onBlur={() => {confirm()}}
                            className='all-birthdays-search-field'
                        />
                        <div>
                            <Button onClick={() => {confirm()}}>
                                <SearchOutlined className='search-button'/>
                            </Button>
                            <Button onClick={() => {clearFilters()}}>
                                <CloseOutlined className='clear-button'/>
                            </Button>
                        </div>
                    </>
                )
            },
            filterIcon: () => {
                return(<SearchOutlined />)
            },
            onFilter:(value, record) => {
                return(record.lastName.toLowerCase().includes(value.toLowerCase()))
            },

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
            align: 'center',
        },
        {
            title: 'Delete',
            width: 60,
            align: 'center',
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
            align: 'center',
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