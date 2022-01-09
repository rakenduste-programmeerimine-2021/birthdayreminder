import { Button, Input, Table, Popconfirm, notification, Modal, Form, DatePicker } from 'antd'
import { DeleteOutlined, EditOutlined, SearchOutlined, CloseOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { useContext, useState } from 'react'
import { Context } from '../store'
import axios from 'axios'
import { deleteBirthday, editBirthday } from '../store/actions'
import './AllBirthdaysTable.css'

function AllBirthdaysTable(){
    const [ state, dispatch ] = useContext(Context)
    const [ modalVisible, setModalVisible ] = useState(false)
    const [ editingBirthday, setEditingBirthday ] = useState('')
    const [ form ] = Form.useForm()
    let dateToday = new Date()
    let yearToday = dateToday.getFullYear() 
    let monthToday = dateToday.getMonth()+1
    let dayToday = dateToday.getDate()
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
                    icon={<QuestionCircleOutlined className='questionmark'/>}
                    title='Are you sure?'
                    cancelButtonProps={{ className: 'popup-button' }}
                    okButtonProps={{ className: 'popup-button' }}
                    okText='Yes'
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
                <EditOutlined className='edit-button' onClick={() => handleEdit(e._id)} /> 
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

    const handleCancel = () => {
        form.resetFields()
        setEditingBirthday('')
        setModalVisible(false)
    }

    const handleEdit = (id) => {
        form.resetFields()
        let bdayForEdit = (state.birthdays.data.filter(birthday => birthday._id === id))[0]
        setEditingBirthday(bdayForEdit)
        setModalVisible(true)
    }

    const saveUpdates = async (values) => {
        let formatedBday, bdayUpdated

        if(values['birthday']){
            formatedBday = values['birthday'].format('DD-MM-YYYY')
            console.log(formatedBday)
            bdayUpdated = {
                firstName: values.firstname,
                lastName: values.lastname,
                birthDay: formatedBday
            }
        } else {
            bdayUpdated = {
                firstName: values.firstname,
                lastName: values.lastname
            }
        }

        try {
            const res = await axios.put(`http://localhost:8082/api/bday/update-birthday/${editingBirthday._id}`, bdayUpdated, { 
                headers: {
                    'Authorization':`Bearer ${token}`
                }
            })

            let newBirthday = res.data
            let day, month, year, age
            let fullDate = newBirthday.birthDay.split('-')
            day = parseInt(fullDate[0])
            month = parseInt(fullDate[1])
            year = parseInt(fullDate[2])
            age = yearToday - year
            if(month >= monthToday){
                if(day > dayToday){
                    age -=1
                }
            }
            newBirthday['age'] = age

            dispatch(editBirthday(newBirthday))

            notification.success({
                message:'Birthday updated!'
            })

            form.resetFields()
            setEditingBirthday('')
            setModalVisible(false)

        } catch (error) {
            console.log(error)
            notification.error({
                message:'Something went wrong...'
            })
        } 
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

            <Modal 
                title="Edit birthday" 
                visible={modalVisible} 
                footer={null}
                closable={false}
            >
                <Form 
                    form={form} 
                    autoComplete='off' 
                    onFinish={saveUpdates} 
                    labelCol={{ span: 4 }}
                    >
                    <Form.Item 
                        label='First name' 
                        name='firstname'
                        >
                        <Input 
                            defaultValue={editingBirthday?.firstName} 
                            className='edit-birthday-input-field'
                        />
                    </Form.Item>

                    <Form.Item 
                        label='Last name' 
                        name='lastname' 
                        >
                        <Input 
                            defaultValue={editingBirthday?.lastName}
                            className='edit-birthday-input-field'
                        />
                    </Form.Item>

                    <Form.Item 
                        label='Birthday' 
                        name='birthday' 
                        >
                        <DatePicker className='edit-birthday-date-field' />
                    </Form.Item>

                    <div className='edit-birthday-button-container'>
                        <Form.Item>
                            <Button 
                                type='primary' 
                                htmlType='submit'
                                className='edit-birthday-save-button'
                                >
                                Save changes
                            </Button>
                        </Form.Item>
                        
                        <Form.Item>
                            <Button 
                                onClick={handleCancel}
                                className='edit-birthday-cancel-button'
                                >
                                Cancel editing
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
                
            </Modal>
        </>
    )
}

export default AllBirthdaysTable