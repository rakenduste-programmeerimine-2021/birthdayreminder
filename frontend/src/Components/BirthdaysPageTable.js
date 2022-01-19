import { Table, notification, Modal, Form, Input, Button } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../store'
import axios from 'axios'
import './BirthdaysPageTable.css'

function BirthdaysPageTable(){
   const [ state, ] = useContext(Context)
   const [ isModalVisible, setIsModalVisible ] = useState(false)
   const [ recipientId, setRecipientId ] = useState("")
   const [ subject, setSubject ] = useState("")
   const [ emailBody, setEmailBody ] = useState("")
   const [ form ] = Form.useForm()
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
                e.email ? (<MailOutlined 
                    className='send-mail-button' 
                    onClick={() => handleShowModal(e._id)} />) : ""
            )
        }
    ]

    const handleShowModal = (id) => {
        setRecipientId(id)
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        form.resetFields()
        setSubject("")
        setEmailBody("")
        setRecipientId("")
        setIsModalVisible(false)
    }

    const handleSendEmail = async (values) => {
        let mailInformation = {
            subject: subject,
            emailBody: emailBody
        }

        try{
            const res = await axios.post(`http://localhost:8082/api/bday/send-congrats/${recipientId}`, mailInformation, {
                headers: {
                    'Authorization':`Bearer ${token}`
                }
            })

            notification.success({
                message: res.data
            })

            handleCancel()

        } catch (error) {
            console.log(error)
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

            <Modal
                title='Send an email'
                visible={isModalVisible}
                footer={null}
                closable={false}
                centered
                >
                <Form
                    form={form} 
                    autoComplete='off' 
                    onFinish={handleSendEmail} 
                    labelCol={{ span: 4 }}
                    >
                    <Form.Item
                        label='Subject'
                        name='subject'
                        rules={[
                            { 
                                required: true,
                                type: 'string',
                                whitespace: true,
                                message:'Please insert subject'
                            }
                        ]}
                        >
                        <Input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            autoFocus
                        />
                    </Form.Item>

                    <Form.Item
                        label='Body'
                        name='emailBody'
                        rules={[
                            { 
                                required: true,
                                type: 'string',
                                whitespace: true,
                                message:'Please insert email body'
                            },
                            {
                                max: 2000,
                                message: 'Email message is too long'
                            }
                        ]}
                        >
                        <Input.TextArea 
                            showCount={true}
                            maxLength={2000}
                            autoSize={{
                                minRows: 2
                            }}
                            value={emailBody}
                            onChange={(e) => setEmailBody(e.target.value)}
                        />
                    </Form.Item>

                    <div className='send-email-button-container'>
                        <Form.Item>
                            <Button
                                type='primary'
                                htmlType='sumit'
                                className='send-email-save-button'
                                >
                                Send email
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                onClick={handleCancel}
                                className='send-email-cancel-button'
                                >
                                Cancel
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </Modal>
        </>
    )
}

export default BirthdaysPageTable