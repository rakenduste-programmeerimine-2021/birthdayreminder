import { Typography, Button, Image } from 'antd'
import { useHistory } from 'react-router'
import logo from '../assets/images/logo.png'
import './HomePage.css'
const { Paragraph } = Typography

/* 
    The logic behind where to keep the images and how to use them in js/css files
    https://stackoverflow.com/questions/57111197/react-path-to-public-folder-in-css-background-image
    https://github.com/facebook/create-react-app/issues/1248#issuecomment-266313612
*/

function HomePage(){
    const history = useHistory()
    return(
        <div className="main-grid">
            <div className="grid-item-content">
                <Image className="app-logo" src={logo} preview={false}/>
                <br />
                <Paragraph>Do you sometimes forget the birthdays of your loved ones?</Paragraph>
                <Paragraph>Sign up and you'll never forget them anymore!</Paragraph>
                <br />
                <Paragraph>It's easy! Add the birthdays.</Paragraph>
                <Paragraph>And we'll send you an email notification.</Paragraph>
                <Button className="redirect-button" onClick={() => history.push('/signup')}>Sign up</Button>
                <Paragraph style={{ marginBottom: '0px' }}>or</Paragraph>
                <Button className="redirect-button" onClick={() => history.push('/login')}>Log in</Button>
            </div>
        </div>
    )
}

export default HomePage