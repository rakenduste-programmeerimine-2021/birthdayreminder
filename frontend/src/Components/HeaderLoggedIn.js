import { Menu, notification } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { PlusCircleOutlined } from '@ant-design/icons'
import { LogoutOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { Context } from "../store"
import { logoutUser } from "../store/actions"

function HeaderLogged(){
  const [state, dispatch] = useContext(Context)

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
      <Menu theme='light' mode='horizontal'>
        <Menu.Item key='home'>
          <Link to='/birthdays'><HomeOutlined style={{ width:'50px'}}/></Link>
        </Menu.Item>
        <Menu.Item key='addBirthday' style={{ marginRight: "auto" }}>
          <Link to='/add-birthday'><PlusCircleOutlined style={{ width:'50px'}}/></Link>
        </Menu.Item>
        <Menu.Item key='logout' style={{ width:'120px', textAlign: 'center'}}>
          <Link to='/' 
            onClick={handleLogOut}>Log out <LogoutOutlined/>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default HeaderLogged