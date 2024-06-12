import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/signin'); // Redirect to sign-in page
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
    // Add your password reset logic here
    alert('Password has been reset successfully');
    navigate('/verification-complete'); // Redirect to sign-in page after submitting
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

  const resetPasswordSectionStyle = {
    flex: 1,
    padding: '2rem',
    marginTop: '3rem',
    position: 'relative', // Ensure the cancel icon is positioned correctly
  };

  const headerStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
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
    outline: '0',
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
      <div style={resetPasswordSectionStyle}>
        <div style={cancelIconContainerStyle} onClick={handleCancel}>
          <FaTimes style={cancelIconStyle} />
        </div>
        <h2 style={headerStyle}>Reset Password</h2>
        <form id="reset-password-form" onSubmit={handleResetPassword}>
          <div style={formGroupStyle}>
            <label htmlFor="oldPassword" style={labelStyle}>Old Password</label>
            <input type="password" id="oldPassword" name="oldPassword" placeholder="Enter your old password" required style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="newPassword" style={labelStyle}>New Password</label>
            <input type="password" id="newPassword" name="newPassword" placeholder="Enter your new password" required style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="repeatPassword" style={labelStyle}>Confirm New Password</label>
            <input type="password" id="repeatPassword" name="repeatPassword" placeholder="Repeat your new password" required style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <button type="submit" style={buttonStyle}>Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
