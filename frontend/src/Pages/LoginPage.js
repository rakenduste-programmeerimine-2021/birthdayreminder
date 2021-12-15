import { Typography } from 'antd'
import LoginForm from '../Components/LoginForm'
import Header from '../Components/Header'
import './LoginPage.css'

const { Title } = Typography

function LoginPage(){
    return(
        <div className='login-page-main-content'>
            <Header />
            <Title level={2} className='login-page-title'>Log in!</Title>
            <LoginForm />
        </div>
    )
}

export default LoginPage