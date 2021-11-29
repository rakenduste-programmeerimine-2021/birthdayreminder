import HeaderLogged from "../Components/HeaderLoggedIn"
import { Typography } from 'antd'

const { Title } = Typography

function UpcomingBirthdays(){
    return(
        <div style={{ textAlign: 'center'}}>
            <HeaderLogged />
            <Title style={{ margin: '50px' }}>Upcoming birthdays</Title>
        </div>
    )
}

export default UpcomingBirthdays