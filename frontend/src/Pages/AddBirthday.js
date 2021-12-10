import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store'
import HeaderLoggedIn from "../Components/HeaderLoggedIn"
import AddBirthdayForm from "../Components/AddBirthdayForm"
import { Typography } from 'antd'
import { withRouter } from "react-router"
import './AddBirthday.css'

const { Title } = Typography

function AddBirthday(){
    const history = useHistory()
    const [ state, ] = useContext(Context)
    const token = state.auth.token

    const addNewBirthday = async (birthday) => {
        const res = await axios.post('http://localhost:8082/api/bday/add-birthday', birthday, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if(res.status === 200){
            history.push("/birthdays")
        }
    }

    return(
        <div className='add-birthday-page-main-content'>
            <HeaderLoggedIn />
            <Title level={2} className='add-birthday-page-title'>Add a birthday</Title>
            <AddBirthdayForm addNewBirthday={addNewBirthday} />
        </div>
    )
}

export default withRouter(AddBirthday)