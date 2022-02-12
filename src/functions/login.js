import React from 'react'
import ReactDOM from 'react-dom';

export const Login = async details => {
    try {
        console.log(details)
        const request = await fetch("http://localhost:12346/api/admin/login1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: details.email,
                password: details.password
            })
        });
        const response = await request.json();
        if (response.token) {
            localStorage.setItem("authToken", `Bearer ${response.token}`);
            window.location.href='/admindashboard'
        } else {
            console.log(response)
            //render
        }
    } catch(err) {
        // Error handling
        console.error(err);
        //If for e.g the backend route isnt valid, etc - error handling for that
    }
};