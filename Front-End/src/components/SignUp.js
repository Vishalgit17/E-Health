import React, { useState } from 'react';
import '../css/SignUp.css';
import axios from 'axios';

function SignupComponent() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [age, setAge] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        const user = { fName, lName, email, password, mobileNo, age };

        axios.post('http://localhost:8080/user/signup', user)
            .then(
                response => {
                    console.log(response.data);
                    setFName('');
                    setLName('');
                    setEmail('');
                    setPassword('');
                    setMobileNo('');
                    setAge('');
                }).catch(error => {
                    console.log(error);
                  });
    };

    return (
        <div className="signup-container">
            <div className="form-header">
                <h2>Signup</h2>
            </div>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label htmlFor="fName">First Name:</label>
                    <input
                        type="text"
                        id="fName"
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lName">Last Name:</label>
                    <input
                        type="text"
                        id="lName"
                        value={lName}
                        onChange={(e) => setLName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNo">Mobile Number:</label>
                    <input
                        type="text"
                        id="mobileNo"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button type="submit">Signup</button>
                <div className="form-footer">
                    <span>Already have an account? </span>
                    <a href="/login">Login</a>
                </div>
            </form>
        </div>
    );
}

export default SignupComponent;
