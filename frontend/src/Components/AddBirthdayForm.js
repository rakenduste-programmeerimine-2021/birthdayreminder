import { Form, Input, Button, DatePicker, notification, Row, Col } from 'antd'
import { useContext } from "react";
import { Context } from "../store";
import { addBirthday } from '../store/actions'
import './AddBirthdayForm.css'

function AddBirthdayForm({ addNewBirthday }){
    const [ , dispatch ] = useContext(Context)
    const [ form ] = Form.useForm()

    const handleAddBirthday = async (values) => {
        const birthday = values['birthday'].format('DD-MM-YYYY')
        
        const newBirthday = {
            firstName: values.firstname,
            lastName: values.lastname,
            birthDay: birthday
        }

        try {
            await addNewBirthday(newBirthday)
            notification.success({
                message: 'New birthday added!'
            })
            dispatch(addBirthday(newBirthday))
            form.resetFields()
        } catch (error) {
            notification.error({
                message: 'Something went wrong...!'
            })
        }
    }

    return(
        <>
            <Row type='flex' align='center'>
                <Col xs={22} className='add-birthday-column'>
                    <Form
                        form={form}
                        autoComplete='off'
                        onFinish={handleAddBirthday}
                        labelCol={{ span: 5 }}
                        >
                        <Form.Item
                            label='First name'
                            name='firstname'
                            className='add-birthday-form-row'
                            rules={[
                                { 
                                    required: true,
                                    message:'Please insert first name'
                                }
                            ]}
                            >
                            <Input 
                                className='add-birthday-input-field'
                                autoFocus
                            />
                        </Form.Item>

                        <Form.Item 
                            label='Last name' 
                            name='lastname' 
                            rules={[
                                { 
                                    required: true, 
                                    message:'Please insert last name'
                                }
                            ]}
                            >
                            <Input className='add-birthday-input-field'/>
                        </Form.Item>

                        <Form.Item 
                            label='Birthday' 
                            name='birthday' 
                            rules={[
                                { 
                                    required: true, 
                                    message:'Please choose a date'
                                }
                            ]}
                            >
                            <DatePicker className='add-birthday-date-field'/>
                        </Form.Item>

                        <Form.Item >
                            <Button 
                                type="primary" 
                                htmlType="submit" 
                                className='birthday-submit-button'
                                >
                                Add
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default AddBirthdayForm
