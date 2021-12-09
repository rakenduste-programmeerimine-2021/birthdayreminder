import HeaderLoggedIn from "../Components/HeaderLoggedIn"
import { Typography } from 'antd'
import { withRouter } from "react-router"
import AllBirthdaysTable from "../Components/AllBirthdaysTable"
import './StyleForBirthdayPages.css'

const { Title } = Typography

function AllBirthdays(){
    return(
        <>
            <HeaderLoggedIn />
            <div className='main-content'>
                <Title level={2} className='title-style'>All birthdays</Title>
                <AllBirthdaysTable />
            </div>
        </>
    )
}

export default withRouter(AllBirthdays)