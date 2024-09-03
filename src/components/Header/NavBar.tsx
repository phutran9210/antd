import { Menu } from 'antd'

const NavBar = () => {
    return (
        <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
            <Menu.Item key="4">Services</Menu.Item>
        </Menu>
    )
}

export default NavBar
