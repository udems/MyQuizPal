import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    document.getElementById('forgot-password-form').reset(); // Clear the form inputs
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    // Add your forgot password logic here
    alert('Password reset link has been sent to your email');
    navigate('/signin'); // Redirect to sign-in page after submitting
  };

  const containerStyle = {
    display: 'flex',
    height: '95vh',
    width: '80%',
    maxWidth: '50rem',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
    marginTop: '1rem',
    justifyContent: 'center',
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
    height: '15vh',
  };

  const forgotPasswordSectionStyle = {
    flex: 1,
    padding: '2rem',
    marginTop: '3rem',
    position: 'relative', // Ensure the cancel icon is positioned correctly
  };

  const headerStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
  };

  const sentenceStyle = {
    fontSize: '1rem',
    marginBottom: '2rem',
  };

  const formGroupStyle = {
    marginBottom: '1rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#673ab7',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const cancelIconContainerStyle = {
    position: 'absolute',
    top: '10px',
    right: '32px',
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

  return (
    <div style={containerStyle}>
      <div style={logoSectionStyle}>
        <img src="src/assets/Logo.png" alt="Company Logo" style={logoStyle} />
      </div>
      <div style={forgotPasswordSectionStyle}>
        <div style={cancelIconContainerStyle} onClick={handleCancel}>
          <FaTimes style={cancelIconStyle} />
        </div>
        <h2 style={headerStyle}>Forgot Password</h2>
        <p style={sentenceStyle}>Please your email address to receive a verification code</p>
        <form id="forgot-password-form" onSubmit={handleForgotPassword}>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <button type="submit" style={buttonStyle}>Reset Password</button>
          </div>
        </form>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p>Remembered your password? <Link to="/signin" style={{ textDecoration: 'none', color: '#673ab7', fontWeight: 'bold', }}>Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
