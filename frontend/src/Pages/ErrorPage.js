import { Button, Result } from 'antd'
import { useHistory } from 'react-router'

function ErrorPage(){
    const history = useHistory()

    return(
        <div style={{ textAlign: 'center', marginTop: '100px'}}>
            <Result 
              status="info"
              title='404 Page not Found'
              subTitle="We're sorry, this page you requested could not be found!"
              extra={
                <Button 
                  style={{ width: '100px'}} 
                  onClick={() => history.push('/')}>Back Home
                </Button>
              }
            />
        </div>
    )
}

export default ErrorPage