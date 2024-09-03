import { createGlobalStyle } from 'styled-components'
import { Fragment } from 'react'
import MainLayout from '@layouts/MainLayout.tsx'

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
        margin: 0;
        padding: 0;
    }
`

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <MainLayout>This is MyPage</MainLayout>
        </Fragment>
    )
}

export default App
