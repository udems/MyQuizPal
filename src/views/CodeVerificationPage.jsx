import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import companyLogo from '../assets/Logo.png';

const CodeVerificationPage = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);

  const handleInputChange = (index, value) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);

    // Auto focus the next input box if the value is entered
    if (value !== '' && index < 3) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Combine the code from all input boxes
    // const code = verificationCode.join('');

    // Perform verification logic (e.g., validate against the code sent via email)

    // Redirect to the appropriate page after successful verification
    navigate('/reset-password'); // Redirect to dashboard after successful verification
  };

  const handleResendCode = () => {
    // Logic to resend the verification code (e.g., send another email with the code)
    alert('Verification code resent!');
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
    maxWidth: '100%',
    height: '15vh',
  };

  const verificationSectionStyle = {
    flex: 1,
    padding: '2rem',
    position: 'relative', // Ensure the cancel icon is positioned correctly
  };

  const headerStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    marginTop: '3rem',
  };

  const sentenceStyle = {
    fontSize: '1rem',
    marginBottom: '2rem',
  };

  const formGroupStyle = {
    marginBottom: '1rem',
  };

//   const labelStyle = {
//     display: 'block',
//     marginBottom: '0.5rem',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   };

  const buttonStyle = {
    width: '90%',
    padding: '10px',
    marginLeft: '0.6rem',
    backgroundColor: '#673ab7',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const cancelIconContainerStyle = {
    position: 'absolute',
    top: '20px',
    left: '30px',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '1.5rem',
  };

  const resendLinkStyle = {
    textDecoration: 'underline',
    color: '#000',
    cursor: 'pointer',
    textAlign: 'center',
    marginTop: '3rem',
    marginBottom: '3rem',
  };

  return (
    <div style={containerStyle}>
      <div style={logoSectionStyle}>
        <img src={companyLogo} alt="Company Logo" style={logoStyle} />
      </div>
      <div style={verificationSectionStyle}>
        <div style={cancelIconContainerStyle} onClick={() => navigate('/signup')}>
          &lt;
        </div>
        <h2 style={headerStyle}>Verify Your Email</h2>
        <p style={sentenceStyle}>Please enter the verification code sent to your email address.</p>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                type="text"
                id={`code-input-${index}`}
                maxLength={1}
                value={verificationCode[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                style={{
                  width: '4rem',
                  height: '4rem',
                  marginRight: '2.5rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                  border: '2px solid #673ab7',
                  borderRadius: '5px',
                  fontSize: '1.5rem',
                  outline: 'none',
                }}
              />
            ))}
          </div>
          <p style={resendLinkStyle} onClick={handleResendCode}>Resend Code</p>
          <button type="submit" style={buttonStyle}>Verify</button>
        </form>
      </div>
    </div>
  );
};

export default CodeVerificationPage;
