import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Register() {

    const registerBody = {
        width: "800px", 
        height: "500px",
        background: "rgb(11, 16, 67)",
        color: "white"
    };
    const registerContent = {
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "margin-top": "10px"
    };
    const registerCenter = {
        padding: "40px 50px 0 50px"
    };
    const formArea = {
        width: "400px",
        height: "325px",
        padding: "0px 0 0 50px",
        background: "rgb(32 49 115)",
        margin: "25px 0 0 200px",
        color: "white"
    };
    const inputCnt = {
        width: "250px",
        height: "30px",
        "margin-left": "20px",
        "margin-top": "10px",
        background: "rgb(47 48 100)"
    };
    const inputCntBtn = {
        width: "250px",
        height: "30px",
        "margin-left": "20px",
        "margin-top": "10px",
        background: "rgb(172 176 2)"
    };


    const [formData, setFormData] = useState({
        full_name: "",
        username: "",
        country_row_id: "",
        mobile_number: "",
        email_id: "",
        password: "",
        referral: ""
    });
    const updateFormData = (event) =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const {
        full_name,
        username,
        country_row_id,
        mobile_number,
        email_id,
        password,
        referral
    } = formData;

    function handleSubmit(e) {
        e.preventDefault();

        const url = "https://react-tasks-nodejs-api.herokuapp.com/user/register";
        const loginKey = "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH";

        let registerObj = formData

        axios
            .post(url, registerObj, {
                headers: {
                    api_key: loginKey
                }
            })
            .then((response) => {
                console.log(response);
                console.log(response.data.status);
                // setLoginData(response.data);
            });

    }
    return (
        <div className="register-container" style={registerBody}>
            <div className="register-content" style={registerCenter}>
                <div style={registerContent}>Register</div>
                <div style={registerContent}>Create your company accounts</div>
            </div>
            
            <div className="register-form" style={formArea}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            value={full_name}
                            onChange={(e) => updateFormData(e)}
                            placeholder="Full name"
                            style={inputCnt}
                            type="text"
                            name="full_name"
                            required
                        />
                    </div>
                    <div>
                        <input
                            value={username}
                            onChange={(e) => updateFormData(e)}
                            placeholder="User Name"
                            type="text"
                            style={inputCnt}
                            name="username"
                            required
                        />
                    </div>
                    <div>
                        <input
                            value={country_row_id}
                            onChange={(e) => updateFormData(e)}
                            placeholder="Select Country"
                            type="text"
                            style={inputCnt}
                            name="country_row_id"
                            required
                        />
                    </div>
                    <div>
                        <input
                            value={mobile_number}
                            onChange={(e) => updateFormData(e)}
                            placeholder="Mobile Number"
                            type="number"
                            style={inputCnt}
                            name="mobile_number"
                            required
                        />
                    </div>
                    <div>
                        <input
                            value={email_id}
                            onChange={(e) => updateFormData(e)}
                            placeholder="Email address"
                            type="email"
                            style={inputCnt}
                            name="email_id"
                            required
                        />
                    </div>
                    <div>
                        <input
                            value={password}
                            onChange={(e) => updateFormData(e)}
                            placeholder="Password"
                            type="password"
                            style={inputCnt}
                            name="password"
                            required
                        />
                    </div>
                    <div>
                        <input
                            value={referral}
                            onChange={(e) => updateFormData(e)}
                            placeholder="Referral ID"
                            type="text"
                            style={inputCnt}
                            name="referral"
                        />
                    </div>

                    <button type="submit" style={inputCntBtn}>Submit</button>
                </form>
            </div>
        </div>
    );
}
