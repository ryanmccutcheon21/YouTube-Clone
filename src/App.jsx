import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/homeScreen/loginScreen/LoginScreen'
import './_app.scss'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

const Layout = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false)
    const handleToggleSidebar = () => toggleSidebar(value => !value)
    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container">
                <Sidebar
                    sidebar={sidebar}
                    handleToggleSidebar={handleToggleSidebar}
                />
                <Container className="app__main" fluid>
                    {children}
                </Container>
            </div>
        </>
    )
}

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Layout>
                        <HomeScreen />
                    </Layout>
                </Route>
                <Route path="/auth">
                    <LoginScreen />
                </Route>
                <Route path="/search">
                    <Layout>
                        <h1>Search Results</h1>
                    </Layout>
                </Route>
                <Route>
                    <Redirect t0="/" />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
