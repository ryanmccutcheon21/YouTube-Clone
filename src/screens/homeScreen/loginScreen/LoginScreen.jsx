import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../../redux/actions/auth.action'
import './loginScreen.scss'

const LoginScreen = () => {
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login())
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="Logo" />
                <button onClick={handleLogin}>
                    Login with Google
                </button>
                <p>This project was made using YouTube Data API</p>
            </div>
        </div>
    )
}

export default LoginScreen
