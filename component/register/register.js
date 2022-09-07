import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Register() {

    const registerBody = {
        width: "800px", 
        height: "500px",
        background: "rgb(11, 16, 67)",
        color: "white"
    }


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
                // setLoginData(response.data);
            });

    }
    return (
        <div className="register-container" style={registerBody}>
            <div>Register</div>
            <div>Create your company accounts</div>
            <div className="register-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            value={full_name}
                            onChange={(e) => updateFormData(e)}
                            placeholder="Full name"
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
                            name="referral"
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
