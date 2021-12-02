import { Typography, Button, Image } from 'antd'
import { useHistory } from 'react-router'
const { Paragraph } = Typography

function HomePage(){
    const history = useHistory()
    return(
        <div className="mainDiv">
            <div className="homePageContent">
                <Image src="./logo.png" preview={false}/>
                <br />
                <Paragraph>Do you sometimes forget the birthdays of your loved ones?</Paragraph>
                <Paragraph>Sign up and you'll never forget them anymore!</Paragraph>
                <br />
                <Paragraph>It's easy! Add the birthdays.</Paragraph>
                <Paragraph>And we'll send you an email notification.</Paragraph>
                <Button className="homePageBTN" onClick={() => history.push('/signup')}>Sign up</Button>
                <Paragraph style={{ marginBottom: '0px' }}>or</Paragraph>
                <Button className="homePageBTN" onClick={() => history.push('/login')}>Log in</Button>
            </div>
        </div>
    )
}

export default HomePage