import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store'
import HeaderLoggedIn from "../Components/HeaderLoggedIn"
import AddBirthdayForm from "../Components/AddBirthdayForm"
import { Typography } from 'antd'

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
            history.push("/Birthdays")
        }
    }

    return(
        <div style={{ textAlign: 'center' }}>
            <HeaderLoggedIn />
            <Title style={{ marginTop: '50px' }}>Add a birthday</Title>
            <AddBirthdayForm addNewBirthday={addNewBirthday} />
        </div>
    )
}

export default AddBirthday