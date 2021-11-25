import { Form, Input, Button, DatePicker } from 'antd'

function AddBirthdayForm(){
/*
nii saab kuupäeva kätte: values['form-item-name']
formaatida saab nt: values['form-item-name'].format('DD-MM-YYYY') 
*/

    return(
        <div>
            <Form autoComplete='off' labelCol={{ span: 10 }} wrapperCol={{ span: 5 }}>
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
