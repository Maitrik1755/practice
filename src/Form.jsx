import React, { useState } from "react";

const Form = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",

    });

    const formHandeling = (e) => {
        e.preventDefault();
        alert(
            "Your message has been submitted: " +
            userData.name +
            " " +
            userData.email +
            " " +
            userData.password
        );
    };

    // one function for all inputs
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={formHandeling}>
            <div>
                Name:-
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={userData.name}
                    onChange={handleChange}
                />
            </div>
            <h3>{userData.name}</h3>

            <div>
                Email:-
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={userData.email}
                    onChange={handleChange}
                />
            </div>
            <h3>{userData.email}</h3>

            <div>
                Password:-
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                />
            </div>
            <h3>{userData.password}</h3>

            <button>Submit</button>
        </form>
    );
};

export default Form;
