import { Form, Input, Button } from 'antd';

function LoginForm(){
    return(
        <div>
            <Form autoComplete='off' labelCol={{ span: 10 }} wrapperCol={{ span: 5 }}>
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