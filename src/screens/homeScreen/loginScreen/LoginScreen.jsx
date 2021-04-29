import React from 'react'
import './loginScreen.scss'

const LoginScreen = () => {
    return (
        <div className="login">
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="Logo" />
                <button>
                    Login with Google
                </button>
                <p>This project was made using YouTube Data API</p>
            </div>
        </div>
    )
}

export default LoginScreen
