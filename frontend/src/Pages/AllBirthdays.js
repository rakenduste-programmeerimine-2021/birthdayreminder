import HeaderLogged from "../Components/HeaderLoggedIn"
import { Typography } from 'antd'

const { Title } = Typography

function AllBirthdays(){
    return(
        <div style={{ textAlign: 'center'}}>
            <HeaderLogged />
            <Title style={{ margin: '50px' }}>All birthdays</Title>
        </div>
    )
}

export default AllBirthdays