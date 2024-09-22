import { Menu } from 'antd'
import styled from 'styled-components'
import { HomeOutlined } from '@ant-design/icons'
import { useWindowSize } from '@/hooks/systemHooks'

const NavBar = () => {
    const size = useWindowSize()
    console.log('size', size)
    return (
        <StyledMenu mode="horizontal" theme="dark" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
            <Menu.Item key="0">
                <StyledHomeOutlined />
            </Menu.Item>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
            <Menu.Item key="4">Services</Menu.Item>
        </StyledMenu>
    )
}

export default NavBar

const StyledMenu = styled(Menu)`
    background-color: #4096ff;
    border-radius: 30px;
    padding-left: 30px;
`
const StyledHomeOutlined = styled(HomeOutlined)`
    font-size: 24px;
    color: #102465;
`
