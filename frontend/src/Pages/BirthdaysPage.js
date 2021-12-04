import HeaderLoggedIn from "../Components/HeaderLoggedIn"
import BirthdaysPageTable from "../Components/BirthdaysPageTable";
import { Typography, Button } from 'antd'
import { useContext, useEffect } from "react";
import { Context } from "../store";
import { useHistory } from 'react-router-dom';
import { withRouter } from "react-router";
import { updateBirthdays } from '../store/actions'
import axios from 'axios'

const { Title } = Typography

function BirthdaysPage(){
    const [ state, dispatch ] = useContext(Context)
    const history = useHistory();
    const token = state.auth.token
    
    const getBirthdays = async () => {

        const response = await axios.get('http://localhost:8082/api/bday/get-birthdays', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        dispatch(updateBirthdays(response.data))
    }

    useEffect(() => {
        getBirthdays()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

export default withRouter(BirthdaysPage)