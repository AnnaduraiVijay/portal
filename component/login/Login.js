import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./styles.css";

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
        <div className="login-user">
            <div className="login-container">Login</div>
            <div className="login-header">Enter your account login details </div>
            <form className="login-form-container" onSubmit={onSubmit}>
                <input
                    type="email"
                    id="username-input"
                    placeholder="Username/Email"
                    value={username}
                    onKeyUp={handleKeyUp}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    type="password"
                    id="password-input"
                    placeholder="Password"
                    onKeyUp={handleKeyUp}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button
                    type="submit"
                    id="button-input"
                    disabled={isEnable}
                >
                    Sign In
                </button>
            </form>
        </div >
    );
}
