import { Menu, notification } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { PlusCircleOutlined } from '@ant-design/icons'
import { LogoutOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { Context } from "../store"
import { logoutUser } from "../store/actions"
import './HeaderLoggedIn.css'

function HeaderLoggedIn(){
  const [ , dispatch ] = useContext(Context)

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
      <div className='header-menu-container'>
        <Menu theme='light' mode='horizontal' className='header-menu-content'>
            <Menu.Item key='home'>
              <Link to='/birthdays'>
                <HomeOutlined className='header-menu-icon'/>
              </Link>
            </Menu.Item>

            <Menu.Item key='addBirthday' className='header-menu-item-on-left'>
              <Link to='/add-birthday'>
                <PlusCircleOutlined className='header-menu-icon'/>
              </Link>
            </Menu.Item>

            <Menu.Item key='logout' className='header-menu-item'>
              <Link to='/' onClick={handleLogOut}>
                Log out <LogoutOutlined/>
              </Link>
            </Menu.Item>
        </Menu>
      </div>
    </>
  )
}

export default HeaderLoggedIn