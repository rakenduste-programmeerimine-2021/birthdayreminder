import { Menu, Image } from 'antd'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import './Header.css'

function Header(){
    return(
        <>
            <Menu theme='light' mode='horizontal' className='not-logged-header-menu'>                   
                <Menu.Item key='homePage'>
                    <Link to='/'>
                        <Image 
                            className='birthday-app-logo' 
                            src={logo} 
                            preview={false}
                        />
                    </Link>
                </Menu.Item>               
            </Menu>
        </>
    )
}

export default Header