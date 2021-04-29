import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/homeScreen/loginScreen/LoginScreen'
import './_app.scss'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
    const { accessToken, loading } = useSelector(state => state.auth)

    const history = useHistory()

    useEffect(() => {
        if (!loading && !accessToken) {
            history.push('/auth')
        }
    }, [accessToken, loading, history])

    return (
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
    )
}

export default App
