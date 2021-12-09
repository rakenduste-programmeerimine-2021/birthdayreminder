import HeaderLoggedIn from "../Components/HeaderLoggedIn"
import { Typography } from 'antd'
import { withRouter } from "react-router"
import UpcomingBirthdaysTable from "../Components/UpcomingBirthdaysTable"
import './BirthdaysPage.css'

const { Title } = Typography

function UpcomingBirthdays(){
    return(
        <>
            <HeaderLoggedIn />
            <div className='main-content'>
                <Title level={2} className='title-style'>Upcoming birthdays</Title>
                <UpcomingBirthdaysTable />
            </div>
        </>
    )
}

export default withRouter(UpcomingBirthdays)