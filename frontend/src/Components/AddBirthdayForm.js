import { Form, Input, Button, DatePicker, notification } from 'antd'
import { useContext } from "react";
import { Context } from "../store";
import { addBirthday } from '../store/actions'

function AddBirthdayForm({ addNewBirthday }){
    const [ state, dispatch ] = useContext(Context)
    const [ form ] = Form.useForm()

    const handleAddBirthday = async (values) => {
        const birthday = values['birthday'].format('DD-MM-YYYY')
        
        const newBirthday = {
            firstName: values.firstname,
            lastName: values.lastname,
            email: values.email,
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
        <div>
            <Form form={form} autoComplete='off' onFinish={handleAddBirthday} labelCol={{ span: 10 }} wrapperCol={{ span: 5 }}>
                <Form.Item label='Firstname' name='firstname' rules={[{ required: true, message:'Please insert firstname'}]}>
                    <Input />
                </Form.Item>
                <Form.Item label='Lastname' name='lastname' rules={[{ required: true, message:'Please insert lastname'}]}>
                    <Input />
                </Form.Item>
                <Form.Item label='E-mail' name='email' rules={[{ type:'email', message:'Please insert correct E-mail'}]}>
                    <Input />
                </Form.Item>
                <Form.Item label='Birthday' name='birthday' rules={[{ required: true, message:'Please choose a date'}]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 9, span: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddBirthdayForm
