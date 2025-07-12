
import React, { useState } from 'react';
import './Css/LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg(""); // Clear error on input change
  };

  const login = async () => {
    try {
      const response = await fetch('https://e-commerce-b5yu.onrender.com/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        setErrorMsg(responseData.error || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg("Network error. Please try again later.");
    }
  };

  const signup = async () => {
    try {
      const response = await fetch('https://e-commerce-b5yu.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        // Switch to Login after successful signup
        setState("Login");
        setErrorMsg("");
        setFormData({ username: "", email: "", password: "" });
      } else {
        setErrorMsg(responseData.error || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMsg("Network error. Please try again later.");
    }
  };

  // Handle form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === "Login") {
      login();
    } else {
      signup();
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>

        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          {state === 'Sign Up' && (
            <input
              name='username'
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder='Your Name'
              required
            />
          )}
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder='Email Address'
            required
          />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder='Password'
            required
          />

          {/* Inline error message */}
          {errorMsg && <p className="error-msg">{errorMsg}</p>}

          <div className='login-btn-container'>
            <button type="submit" className='login-btn'>
              {state === 'Login' ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </form>

        {state === 'Sign Up' ? (
          <p className='loginsignup-login'>
            Already have an account?{" "}
            <span onClick={() => { setState("Login"); setErrorMsg(""); }}>
              Login here
            </span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Create an account?{" "}
            <span onClick={() => { setState("Sign Up"); setErrorMsg(""); }}>
              Click here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" id='agree' />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
