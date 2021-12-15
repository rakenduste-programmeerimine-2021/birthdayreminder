import { Form, Input, Button, notification, Row, Col } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../store";
import { loginUser } from "../store/actions";
import './LoginForm.css'

function LoginForm(){
    const [ , dispatch ] = useContext(Context);
    const history = useHistory();
    const [form] = Form.useForm();

    const handleLoginForm = async (values) => {
        const userLoginInfo = {
            email: values.email,
            password: values.password
        }

        // console.log(userLoginInfo)

        try {
            const response = await axios.post('http://localhost:8082/api/auth/login', userLoginInfo)

            sessionStorage.setItem('token', response.data.token)
            sessionStorage.setItem('user', JSON.stringify(response.data.user))

            dispatch(loginUser(response.data));
            history.push("/birthdays");
            // console.log(response.data.user.firstName)
            notification.success({
                message: `Welcome, ${response.data.user.firstName}!`,
            })
            form.resetFields()
        } catch (error) {
            // console.log(error.response.data.msg[0].msg);
            notification.error({
                message: 'Something went wrong...!',
                duration: 2,
            })
        }
    }

    return(
        <>
            <Row type='flex' align='center'>
                <Col xs={22} className='login-column'>
                    <Form 
                        form={form} 
                        onFinish={handleLoginForm} 
                        autoComplete='off' 
                        labelCol={{ span: 5 }} 
                        // layout='vertical'
                        >
                        <Form.Item 
                            label='Email' 
                            name='email' 
                            className='login-form-row'
                            rules={[
                                { 
                                    required: true, 
                                    message:'Please insert email'
                                }
                            ]}
                            >
                            <Input 
                                className='login-form-input-field'
                                autoFocus
                            />
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
                            <Input.Password className='login-form-input-field' />
                        </Form.Item>

                        <Form.Item>
                            <Button 
                                type="primary" 
                                htmlType="submit"
                                className='login-form-submit-button'
                                >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default LoginForm