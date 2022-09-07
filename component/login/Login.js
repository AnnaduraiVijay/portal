import React, { useState, useEffect } from "react";
import axios from "axios";
import "./login.module.css";

export default function Login({
    setUserIsLoggedIn,
    setLoggedUserInfo
}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isEnable, setEnable] = useState(true);
    const handleKeyUp = () => {
        if (username.length > 0 && password.length > 0) setEnable(false);
        else setEnable(true);
    };
    const loginBody = {
        width: "800px", 
        height: "500px",
        background: "rgb(11, 16, 67)",
        color: "white"
    }
    const loginContent = {
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "margin-top": "10px"
    }
    const loginCenter = {
        padding: "75px 50px 0 50px"
    }
    const formArea = {
        border: "1px solid red",
        width: "400px",
        height: "200px",
        padding: "40px 0 0 50px",
        background: "rgb(32 49 115)",
        margin: "25px 0 0 200px"
    }
    const inputCnt = {
        width: "250px",
        height: "30px",
        "margin-left": "20px",
        "margin-top": "10px",
        background: "rgb(47 48 100)"
    }
    const inputCntBtn = {
        width: "250px",
        height: "30px",
        "margin-left": "20px",
        "margin-top": "10px",
        background: "rgb(172 176 2)"
    }

    const onSubmit = e => {
        e.preventDefault();

        const url = "https://react-tasks-nodejs-api.herokuapp.com/user/login";
        const loginKey = "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH";

        let loginObj = {
            login_id: username,
            password: password
        };

        axios
            .post(url, loginObj, {
                headers: {
                    api_key: loginKey
                }
            })
            .then((response) => {
                if (response.data.status) {
                    setUserIsLoggedIn(true)
                    setLoggedUserInfo(response.data.message)
                } else {
                    setUserIsLoggedIn(false)
                    setLoggedUserInfo({})
                }
            });
    };

    return (
        <div className="login-user" style={loginBody}>
            <div className="login-content" style={loginCenter}>
                <div className="login-container" style={loginContent}>Login</div>
                <div className="login-header" style={loginContent}>Enter your account login details </div>
            </div>
            <form className="login-form-container" onSubmit={onSubmit} style={formArea}>
                <div>
                    <input
                        type="email"
                        id="username-input"
                        style={inputCnt}
                        placeholder="Username/Email"
                        value={username}
                        onKeyUp={handleKeyUp}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password-input"
                        style={inputCnt}
                        placeholder="Password"
                        onKeyUp={handleKeyUp}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        id="button-input"
                        style={inputCntBtn}
                        disabled={isEnable}
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div >
    );
}
