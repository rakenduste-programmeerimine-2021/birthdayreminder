import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../store";
import { loginUser } from "../store/actions";

function LoginForm(){
    const [state, dispatch] = useContext(Context);
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
            dispatch(loginUser(response.data));
            history.push("/Birthdays");
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
        <div>
            <Form form={form} onFinish={handleLoginForm} autoComplete='off' labelCol={{ span: 10 }} wrapperCol={{ span: 5 }}>
                <Form.Item label='E-mail' name='email' rules={[{ required: true, message:'Please insert E-mail'}]}>
                    <Input />
                </Form.Item>
                <Form.Item label='Password' name='password' rules={[{ required: true, message:'Please insert password'}]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 9, span: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginForm