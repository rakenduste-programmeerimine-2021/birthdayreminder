import { Typography, Button } from 'antd'
import { useHistory } from 'react-router'
const { Title, Paragraph } = Typography

function HomePage(){
    const history = useHistory()
    return(
        <div style={{ textAlign: 'center', marginTop: '100px'}}>
            <Title>BirthdayReminder</Title>
            <Paragraph>This page is made for you to remember your friends birthday!</Paragraph>
            <Paragraph>Create an user and start adding birthdays you do not want to forget.</Paragraph>
            <Button style={{ width: '100px'}} onClick={() => history.push('/SignupPage')}>Sign up</Button>
            <Paragraph>or</Paragraph>
            <Button style={{ width: '100px'}} onClick={() => history.push('/LoginPage')}>Log in</Button>
        </div>
    )
}

export default HomePage