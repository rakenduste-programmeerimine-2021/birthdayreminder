import { Menu } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
            <Menu theme="light" mode="horizontal">                   
                <Menu.Item key='1'>
                    <Link to="/"><HomeOutlined style={{ width:'50px'}} /></Link>
                </Menu.Item>               
            </Menu>
        </>
    )
}

export default Header