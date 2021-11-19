import { Form, Input, Button } from 'antd'

function SignupForm(){
   return(
    <div style={{textAlign: 'center'}}>
        <Form autoComplete='off' labelCol={{ span: 10 }} wrapperCol={{ span: 5 }}>
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
            <Form.Item label='Password again' name='password1' rules={[{ required: true, message:'Please insert password again'}]}>
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