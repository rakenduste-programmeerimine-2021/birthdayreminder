import { Button, Result } from 'antd'
import { useHistory } from 'react-router'
import { useContext } from 'react'
import { Context } from '../store'

function ErrorPage(){
    const history = useHistory()
    const [ state, ] = useContext(Context)

    const handleRedirect = () => {
        if(state.auth.token) {
          console.log("Jõudsin siia blokki")
            history.push('/birthdays')
        } else {
          console.log("Jõudsin ka sinna teise blokki")
          history.push('/')
        }
    }

    return(
        <div style={{ textAlign: 'center', marginTop: '100px'}}>
            <Result 
              status="info"
              title='404 Page not Found'
              subTitle="We're sorry, this page you requested could not be found!"
              extra={
                <Button 
                  style={{ width: '100px'}} 
                  onClick={handleRedirect}>Back Home
                </Button>
              }
            />
        </div>
    )
}

export default ErrorPage