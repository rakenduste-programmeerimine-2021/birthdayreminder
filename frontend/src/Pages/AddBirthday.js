import HeaderLoggedIn from "../Components/HeaderLoggedIn"
import AddBirthdayForm from "../Components/AddBirthdayForm"
import { Typography } from 'antd'

const { Title } = Typography

function AddBirthday(){
    return(
        <div style={{ textAlign: 'center' }}>
            <HeaderLoggedIn />
            <Title style={{ marginTop: '50px' }}>Add a birthday</Title>
            <AddBirthdayForm />
        </div>
    )
}

export default AddBirthday