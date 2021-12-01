import axios from 'axios';
import { useHistory } from 'react-router-dom'
import SignupForm from "../Components/SignupForm"
import { Typography } from 'antd'
import Header from "../Components/Header"
const { Title } = Typography

function SignupPage(){
    const history = useHistory();

    const addNewUserToDB = async (user) => {
        const response = await axios.post('http://localhost:8082/api/auth/signup', user)
        if(response.status === 200) {
            history.push("/login");
        }
    }

    return(
        <div style={{ textAlign: 'center' }}>
            <Header />
            <Title style={{ marginTop: '50px' }}>Sign up!</Title>
            <SignupForm addNewUserToDB={addNewUserToDB}/>
        </div>  
    )
}

export default SignupPage