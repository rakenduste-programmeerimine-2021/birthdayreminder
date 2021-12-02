import HeaderLogged from "../Components/HeaderLoggedIn"
import { Typography } from 'antd'
import { withRouter } from "react-router"
import UpcomingBirthdaysTable from "../Components/UpcomingBirthdaysTable"

const { Title } = Typography

function UpcomingBirthdays(){
    return(
        <div style={{ textAlign: 'center'}}>
            <HeaderLogged />
            <Title style={{ margin: '50px' }}>Upcoming birthdays</Title>
            <UpcomingBirthdaysTable />
        </div>
    )
}

export default withRouter(UpcomingBirthdays)