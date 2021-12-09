import HeaderLoggedIn from "../Components/HeaderLoggedIn"
import BirthdaysPageTable from "../Components/BirthdaysPageTable";
import LoadingAnimation from "../Components/LoadingAnimation";
import { Typography, Button } from 'antd'
import { useContext, useEffect, useState } from "react";
import { Context } from "../store";
import { useHistory } from 'react-router-dom';
import { withRouter } from "react-router";
import { updateBirthdays } from '../store/actions'
import axios from 'axios'
import './BirthdaysPage.css'

const { Title } = Typography

function BirthdaysPage(){
    const [ state, dispatch ] = useContext(Context)
    const [ isLoading, setIsLoading ] = useState(true)
    const history = useHistory();
    const token = state.auth.token
    let dateToday = new Date()
    let yearToday = dateToday.getFullYear() 
    let monthToday = dateToday.getMonth()+1 //+1 because the return values are 0-11
    let dayToday = dateToday.getDate()
    
    const getBirthdays = async () => {

        const response = await axios.get('http://localhost:8082/api/bday/get-birthdays', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        let Allbirthdays = response.data
        let fullDate
        Allbirthdays.forEach(element => {
            let day, month, year, age
            fullDate = element.birthDay.split('-')
            day = parseInt(fullDate[0])
            month = parseInt(fullDate[1])
            year = parseInt(fullDate[2])
            age = yearToday - year
            if(month >= monthToday){
                if(day > dayToday){
                    age -=1
                }
            }
            element['age'] = age
        })
        dispatch(updateBirthdays(Allbirthdays))
        setIsLoading(false)
    }

    useEffect(() => {
        getBirthdays()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return(
        <>
            <HeaderLoggedIn />
            <div className='main-content'>
                <Title level={2} className='title-style'>Todays birthdays:</Title>
                { isLoading ? <LoadingAnimation /> : <BirthdaysPageTable /> }
            </div>
        </>
    )
}

export default withRouter(BirthdaysPage)