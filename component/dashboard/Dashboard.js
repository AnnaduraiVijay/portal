import React, { useState, useEffect } from "react";
// import "./styles.css";

export default function Dashboard({
    loggedUserInfo
}) {
    const displayObj = { ...loggedUserInfo };
    const contentArea = {
        width: "800px", 
        height: "500px",
        background: "rgb(11, 16, 67)",
        color: "white"
    }
    delete displayObj.token;
    return (<section className="cnt-container" style={contentArea}>
        <table>
            <tr>
                <td>
                    S.No
                </td>
                <td>
                    Field
                </td>
                <td>
                    Value
                </td>
            </tr>
            {Object.entries(displayObj).map(([key, value], index) => (
                <tr key={key}>
                    <td>
                        {index + 1}
                    </td>
                    <td>
                        {key}
                    </td>
                    <td>
                        {value}
                    </td>
                </tr>
            ))}
        </table>
    </section>);
}
