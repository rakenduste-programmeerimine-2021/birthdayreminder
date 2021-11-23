import { Typography } from 'antd'
import LoginForm from '../Components/LoginForm'
import Header from '../Components/Header'

const { Title } = Typography

function LoginPage(){
    return(
        <div style={{ textAlign: 'center' }}>
            <Header />
            <Title style={{ marginTop: '50px' }}>Log in!</Title>
            <LoginForm />
        </div>
    )
}

export default LoginPage