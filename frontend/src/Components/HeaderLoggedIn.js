import { Menu, notification, Image, Typography } from 'antd'
import { HomeOutlined, LogoutOutlined, CalendarOutlined, UserAddOutlined, EditOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { Context } from "../store"
import { logoutUser } from "../store/actions"
import logo from '../assets/images/logo.png'
import './HeaderLoggedIn.css'

function HeaderLoggedIn(){
  const [ , dispatch ] = useContext(Context)
  const { Text } = Typography

  const handleLogOut = () => {
    dispatch(logoutUser())
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    notification.success({
      message:'Logged out!'
    })
  }

  return(
    <>
      {/* Duplicate route = redirects to home */}
      <div className='logo-menu-bar'>
        <Link to='/birthdays'>
          <Image
            className='app-logo-on-the-header'
            src={logo} 
            preview={false}
          />
        </Link>
      </div>
      
      <nav className='lower-menu-buttons-bar'>
        <Menu theme='light' mode='horizontal'>
          {/* Duplicate route = redirects to home */}
          <Menu.Item key='home'>
            <Link to='/birthdays'>
              <HomeOutlined />
            </Link>
          </Menu.Item>

          <Menu.Item key='addBirthday'>
            <Link to='/add-birthday' >
              <Text className='shown-on-bigger-screens'>Add a birthday</Text >
              <UserAddOutlined className='shown-on-smaller-screens' />
            </Link>
          </Menu.Item>

          <Menu.Item key='upcoming'>
            <Link to='/upcoming'>
              <Text className='shown-on-bigger-screens'>Upcoming birthdays</Text >
              <CalendarOutlined className='shown-on-smaller-screens' />
            </Link>
          </Menu.Item>

          <Menu.Item key='edit'>
            <Link to='/all-birthdays'>
              <Text className='shown-on-bigger-screens'>Edit birthdays</Text >
              <EditOutlined className='shown-on-smaller-screens' />
            </Link>
          </Menu.Item>

          <Menu.Item key='logout'>
            <Link to='/' onClick={handleLogOut}>
              <LogoutOutlined/>
            </Link>
          </Menu.Item>
        </Menu>
      </nav>
    </>
  )
}

export default HeaderLoggedIn