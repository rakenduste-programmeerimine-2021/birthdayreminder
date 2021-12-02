import HeaderLogged from "../Components/HeaderLoggedIn"
import { Typography } from 'antd'
import { withRouter } from "react-router"
import AllBirthdaysTable from "../Components/AllBirthdaysTable"

const { Title } = Typography

function AllBirthdays(){
    return(
        <div style={{ textAlign: 'center'}}>
            <HeaderLogged />
            <Title style={{ margin: '50px' }}>All birthdays</Title>
            <AllBirthdaysTable />
        </div>
    )
}

export default withRouter(AllBirthdays)