import { Layout } from 'antd'
import { CSSProperties, ReactNode } from 'react'
import styled from 'styled-components'
import MainHeader from '@components/Header'

const { Header, Footer, Content } = Layout

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Layout
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: 'auto',
                overflow: 'auto',
            }}
        >
            <Header style={headerStyle}>
                <MainHeader />
            </Header>
            <StyledContent>{children}</StyledContent>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    )
}

export default MainLayout

const StyledContent = styled(Content)`
    text-align: center;
    color: #fff;
    background-color: #fff;
    //flex: 1;
    width: 100%;
    height: 1200px;
`

const footerStyle: CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
}

const headerStyle: CSSProperties = {
    textAlign: 'center',
    backgroundColor: '#4096ff',
    padding: 0,
    position: 'fixed',
    width: '80%',
    zIndex: 1000,
    top: 50,
    left: '10%',
    borderRadius: '30px'
}
