import HeaderLoggedIn from "../Components/HeaderLoggedIn"
import BirthdaysPageTable from "../Components/BirthdaysPageTable";
import { Typography, Button } from 'antd'
import { useContext } from "react";
import { Context } from "../store";
import { useHistory } from 'react-router-dom';


const { Title } = Typography

function BirthdaysPage(){
    const [ state, dispatch ] = useContext(Context)
    const history = useHistory();
   
    return(
        <div style={{ textAlign: 'center' }}>
            <HeaderLoggedIn />
            <Title style={{ margin: '50px' }}>Hello, { state.auth.user.firstName }!</Title>
            <div style={{ margin: '20px'}}>
                <Button style={{ margin: '15px'}} onClick={() => history.push('/add-birthday')}>Add a birthday</Button>
                <Button style={{ margin: '15px'}} onClick={() => history.push('/upcoming')}>Upcoming birthdays</Button>
                <Button style={{ margin: '15px'}} onClick={() => history.push('/all-birthdays')}>All Birthdays</Button>
            </div>
            <br/>
            <Title level={4}>Todays birthdays:</Title>
            <BirthdaysPageTable />
        </div>
    )
}

export default BirthdaysPage