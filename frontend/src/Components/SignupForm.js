import { Form, Input, Button, notification } from 'antd'

function SignupForm({ addNewUserToDB }){
    const [form] = Form.useForm();

    const handleSignupForm = async (values) => {
        const newUser = {
            firstName: values.firstname,
            lastName: values.lastname,
            email: values.email,
            password: values.password
        }

        // console.log(newUser)

        if(values.password === values.confirmPassword) {
            try {
                await addNewUserToDB(newUser)
                notification.success({
                    message: 'User Created. You may Log In now :)'
                })
                form.resetFields()
            } catch (err) {
                // This will get the 1. express-validator field and message. But we have an Array...
                // console.log(err.response.data.msg[0].param + ": " + err.response.data.msg[0].msg)
                notification.error({
                    message: 'Something went wrong...!'
                })
            }
        } else {
            notification.error({message:'Passwords do not match!'})
        }
    }

   return(
    <div style={{textAlign: 'center'}}>
        <Form form={form} autoComplete='off' labelCol={{ span: 10 }} wrapperCol={{ span: 5 }} onFinish={handleSignupForm}>
            <Form.Item label='Firstname' name='firstname' rules={[{ required: true, message:'Please insert firstname'}]}>
                <Input />
            </Form.Item>
            <Form.Item label='Lastname' name='lastname' rules={[{ required: true, message:'Please insert lastname'}]}>
                <Input />
            </Form.Item>
            <Form.Item label='E-mail' name='email' rules={[{ required: true, type:'email', message:'Please insert correct E-mail'}]}>
                <Input />
            </Form.Item>
            <Form.Item label='Password' name='password' rules={[{ required: true, message:'Please insert password'}]}>
                <Input.Password />
            </Form.Item>
            <Form.Item label='Password again' name='confirmPassword' rules={[{ required: true, message:'Please insert password again'}]}>
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 9, span: 6 }}>
                <Button type="primary" htmlType="submit">
                    Sign up
                </Button>
            </Form.Item>
        </Form>
    </div>
   )
}

export default SignupForm