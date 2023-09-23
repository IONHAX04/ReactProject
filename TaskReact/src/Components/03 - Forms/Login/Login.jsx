import React from 'react'
import './Login.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import FrontImg from '../../../assets/NewImg.jpg';

import GoogleImg from '../../../assets/google.png';
import Logo from '../../../assets/pyramid.png';

export default function Login() {
    return (

        <div className="login-container">
            <div className="login-card">
                <h2><img className='logo' src={Logo}></img>Diet Planner</h2>
                <h4>Login</h4>
                <div className="row">

                    <button className="btn col-lg-6" id='signInBtn'><img src={GoogleImg}></img> Sign in with Google</button>
                    <button className="btn col-lg-6" id='signInBtn'><i class="bi bi-facebook"></i> Sign in with Facebook</button>
                </div>

                <p>or</p>

                <input className='inputField col-lg-8' type="text" placeholder="Email" />
                <input className='inputField col-lg-8' type="password" placeholder="Password" />

                <p>Forgot Password? </p>

                <button className="btn btn-primary col-lg-8">Login</button>
            </div>
        </div>
    )
}
