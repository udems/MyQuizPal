import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaTimes,} from 'react-icons/fa';


const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Perform any form validation or submission logic here...

    // Redirect to the signin after form submission
    navigate('/signin'); // Redirect to signin route
  };

  const handleCancel = () => {
    document.getElementById('signup-form').reset();
  };
  const containerStyle = {
    display: 'flex',
    width: '80%',
    maxWidth: '50rem',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
    marginTop: '1rem',
    height: '95vh',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cancelIconContainerStyle = {
    position: 'absolute',
    top: '60px',
    right: '400px',
    borderRadius: '50%',
    border: '1px solid #000', // Circle background color
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const cancelIconStyle = {
    fontSize: '12px',
    opacity: '0.6',
  };

  const logoSectionStyle = {
    flex: 0.6,
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#673ab7',
  };

  const logoStyle = {
    maxWidth: '100%',
    height: '15vh',
  };

  const signupSectionStyle = {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const formGroupStyle = {
    marginBottom: '15px',
    position: 'relative',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    marginLeft: '3rem',
  };

  const inputStyle = {
    width: '80%',
    padding: '10px',
    marginLeft: '3rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: '0',
    
  };

  const inputHalfStyle = {
    width: '65%',
    padding: '10px',
    marginLeft: '3rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: '0',
  };

  const firstNameStyle = {
    marginRight: '-80px',
  };

  const buttonStyle = {
    width: '80%',
    padding: '10px',
    marginLeft: '3rem',
    backgroundColor: '#673ab7',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const googleButtonStyle = {
    width: '80%',
    padding: '10px',
    marginLeft: '3rem',
    backgroundColor: '#fff',
    color: '#673ab7',
    fontSize: '1.1rem',
    fontWeight: 'Bold',
    border: '1px solid #673ab7',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const googleLogoStyle = {
    marginRight: '10px',
    fontSize: '1.4rem',
  };

  const signInLinkStyle = {
    marginTop: '1rem',
    textAlign: 'center',
  };

  const orSeparatorStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '1.5rem 0',
    marginLeft: '5rem',
    width: '20rem',
    fontWeight: 'bold',
  };

  const lineStyle = {
    flex: 1,
    height: '1px',
    backgroundColor: '#673ab7',
  };

  const orTextStyle = {
    margin: '0 1rem',
    fontSize: '1rem',
    color: '#888',
  };

  const headerStyle = {
    marginLeft: '3rem',
    marginBottom: '20px',
  };

  const sentenceStyle = {
    marginBottom: '25px',
    marginLeft: '3rem',
  };

  const eyeIconStyle = {
    position: 'absolute',
    top: '35px',
    right: '3.8rem',
    cursor: 'pointer',
    opacity: '0.4', // Make the eye icon transparent
  };

  return (
    <div style={containerStyle}>
        <div style={cancelIconContainerStyle} onClick={handleCancel}>
        <FaTimes style={cancelIconStyle} />
      </div>
      <div style={logoSectionStyle}>
        <img src="src\assets\Logo.png" alt="Company Logo" style={logoStyle} />
      </div>
      <div style={signupSectionStyle}>
        <h2 style={headerStyle}>Welcome to MyQuizPal</h2>
        <p style={sentenceStyle}>Create an account to get started</p>
        <form id='signup-form' onSubmit={handleSignUp} action="/signup" method="post">
          <div style={{ ...formGroupStyle, display: 'flex' }}>
            <div style={{ flex: '1', ...firstNameStyle }}>
              <label htmlFor="firstName" style={labelStyle}>First Name</label>
              <input type="text" id="firstName" name="firstName" placeholder='Enter your first name' required style={inputHalfStyle} />
            </div>
            <div style={{ flex: '1' }}>
              <label htmlFor="lastName" style={labelStyle}>Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder='Enter your last name' required style={{ ...inputHalfStyle, marginRight: '0' }} />
            </div>
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input type="email" id="email" name="email" placeholder='Enter your email address' required style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>Password</label>
            <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder='Enter your password' required style={inputStyle} />
            <div style={eyeIconStyle} onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="confirmPassword" style={labelStyle}>Confirm Password</label>
            <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" placeholder='Confirm your password'required style={inputStyle} />
            <div style={eyeIconStyle} onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div style={formGroupStyle}>
            <button type="submit" style={buttonStyle}>Sign Up</button>
          </div>
        </form>
        <div style={orSeparatorStyle}>
          <div style={lineStyle}></div>
          <span style={orTextStyle}>OR</span>
          <div style={lineStyle}></div>
        </div>
        <button style={googleButtonStyle} onClick={() => { /* Handle Google sign-in */ }}>
          <img src="src\assets\google_symbol.svg.png" alt="Google Logo" style={googleLogoStyle} />
          Sign in with Google
        </button>
        <div style={signInLinkStyle}>
          <p>Already have an account? <Link to="/signin" style={{ textDecoration: 'none', color: '#673ab7', fontWeight: 'Bold', }}>Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
