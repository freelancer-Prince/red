import React, { useState, useEffect } from 'react';
import './LoginSignup.css'
import { Link } from 'react-router-dom';
const LoginSignup = () => {


    const [classNames, setClassName] = useState(``);
    const [slider, setSlider] = useState(false);
    useEffect(()=>{
        setClassName(`${slider ? "right-panel-active" : "" }`)
    }, [slider]);
    
    
    

    return (
        <>
        <div  id="body">
    <div id="container" className={classNames}>
        <div className="form-container sign-up-container">
                <form action="">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <Link to="/" className="social"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="/" className="social"><i className="fab fa-google-plus-g"></i></Link>
                        <Link to="/" className="social"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
        </div>
    <div className="form-container sign-in-container">
            <form action="">
                <h1>Sign in</h1>
                <div className="social-container">
                    <Link to="/" className="social"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="/" className="social"><i className="fab fa-google-plus-g"></i></Link>
                    <Link to="/" className="social"><i className="fab fa-linkedin-in"></i></Link>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <Link to="/">Forgot your password?</Link>
                <button>Sign In</button>
            </form>
    </div>
    <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login with your personal info
                    </p>
                    <button className="ghost" onClick={() => setSlider(slider => !slider)} >Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className="ghost" onClick={() => setSlider(slider => !slider)} >Sign Up</button>
                </div>
            </div>
        </div>
</div>  
</div>
        </>
    );
};

export default LoginSignup;