import SignupForm from "../Components/SignupForm"
import { Typography } from 'antd'
import Header from "../Components/Header"
const { Title } = Typography

function SignupPage(){
    return(
        <div style={{ textAlign: 'center' }}>
            <Header />
            <Title style={{ marginTop: '50px' }}>Sign up!</Title>
            <SignupForm/>
        </div>  
    )
}

export default SignupPage