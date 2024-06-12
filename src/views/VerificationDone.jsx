// VerificationCompletePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const VerificationCompletePage = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '60vh',
    marginTop: '8rem',
    marginLeft: '35rem',
    width: '30%',
    border: '1px solid #fff',
    borderRadius: '1.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  };

  const headerStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
  };

  const sentenceStyle = {
    fontSize: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const linkStyle = {
    color: '#673ab7',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <img src="src/assets/tick-circle.png" alt="All Done" style={{ width: '100px', marginBottom: '1rem' }} />
      <h2 style={headerStyle}>All done!</h2>
      <p style={sentenceStyle}>Your password has been reset</p>
      <Link to="/signin" style={linkStyle}>Back to Login</Link>
    </div>
  );
};

export default VerificationCompletePage;
