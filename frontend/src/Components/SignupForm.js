import { Form, Input, Button, notification, Row, Col } from 'antd'
import './SignupForm.css'

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
    <>
        <Row type='flex' align='center'>
            <Col xs={22} className='signup-column'>
                <Form 
                    form={form} 
                    autoComplete='off' 
                    labelCol={{ span: 7 }} 
                    onFinish={handleSignupForm}
                    // layout='vertical'
                    >
                    <Form.Item 
                        label='First name' 
                        name='firstname' 
                        rules={[
                            { 
                                required: true, 
                                message:'Please insert first name'
                            }
                        ]}
                        >
                        <Input 
                            className='signup-form-input-field'
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
                        <Input className='signup-form-input-field'/>
                    </Form.Item>

                    <Form.Item 
                        label='Email' 
                        name='email' 
                        rules={[
                            { 
                                required: true, 
                                type:'email', 
                                message:'Please insert correct email'
                            }
                        ]}
                        >
                        <Input className='signup-form-input-field'/>
                    </Form.Item>

                    <Form.Item 
                        label='Password' 
                        name='password' 
                        rules={[
                            { 
                                required: true, 
                                message:'Please insert password'
                            }
                        ]}
                        >
                        <Input.Password className='signup-form-input-field'/>
                    </Form.Item>

                    <Form.Item 
                        label='Confirm password' 
                        name='confirmPassword' 
                        rules={[
                            { 
                                required: true, 
                                message:'Please insert confirm password'
                            }
                        ]}
                        >
                        <Input.Password className='signup-form-input-field'/>
                    </Form.Item>

                    <Form.Item>
                        <Button 
                            type="primary" 
                            htmlType="submit"
                            className='signup-form-submit-button'
                            >
                            Sign up
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    </>
   )
}

export default SignupForm