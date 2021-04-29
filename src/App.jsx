import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/homeScreen/loginScreen/LoginScreen'
import './_app.scss'

const App = () => {
    const [sidebar, toggleSidebar] = useState(false)
    const handleToggleSidebar = () => toggleSidebar(value => !value)

    return (
        // <>
        //     <Header handleToggleSidebar={handleToggleSidebar} />
        //     <div className="app__container">
        //         <Sidebar
        //             sidebar={sidebar}
        //             handleToggleSidebar={handleToggleSidebar}
        //         />
        //         <Container className="app__main" fluid>
        //             <HomeScreen />
        //         </Container>
        //     </div>
        // </>
        <LoginScreen />
    )
}

export default App
