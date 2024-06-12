import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { FaTimes, FaEye, FaEyeSlash, } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { email, password} = formData;
    if (!email || !password) {
      Swal.fire('Error', 'All fields are required', 'error');
      return false;
    }
    return true;
  };



  const handleSignIn = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true); // Set loading state to true
      let data = JSON.stringify(formData);
      let config = {
        method: 'POST',
        url: 'https://myquizpal.onrender.com/api/login', // Ensure this URL is correct
        headers: { 
          'Content-Type': 'application/json'
        },
        data: data
      };

      try {
        const response = await axios.request(config);
        const responseData = response.data;
        if (responseData && responseData.data.studentId) {
          Swal.fire('Success', 'Login successfully', 'success').then(() => {
            navigate('/HomePage-1');
          });
        } else {
          Swal.fire('Error', 'An error occurred while logging in', 'error');
        }
      } catch (error) {
        console.log(error)
        if (error.response) {
          if (error.response.status === 409) {
            Swal.fire('Error', 'credentials invalid', 'error');
          } else {
            Swal.fire('Error', `An error occurred: ${error.response.data.data.error.title}`, 'error');
          }
        } else {
          Swal.fire('Error', 'An unknown error occurred', 'error');
        }
      } finally {
        setLoading(false); // Set loading state to false after request completes
      }
    }
    navigate('/'); // Redirect to homepage route
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCancel = () => {
    document.getElementById('signin-form').reset(); // Clear the form inputs
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
    alignItems: 'center',
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

  const signinSectionStyle = {
    flex: 1,
    padding: '2rem',
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
    outline: '0',
  };

  const forgotPasswordStyle = {
    display: 'block',
    marginBottom: '1rem',
    textDecoration: 'none',
    color: '#4285f4',
    textAlign: 'right',
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

  const googleButtonStyle = {
    width: '100%',
    padding: '10px',
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

  const orSeparatorStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '2rem 0',
    marginLeft: '2rem',
    width: '23rem',
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
1
  const signupLinkStyle = {
    marginTop: '1rem',
    textAlign: 'center',
  };

  const cancelIconContainerStyle = {
    position: 'absolute',
    top: '0.125rem',
    right: '29px',
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

  const eyeIconStyle = {
    position: 'absolute',
    right: '14px',
    top: '10px',
    cursor: 'pointer',
    opacity: '0.4', // Make the eye icon transparent
  };

  return (
    <div style={containerStyle}>
      <div style={logoSectionStyle}>
        <img src="src/assets/Logo.png" alt="Company Logo" style={logoStyle} />
      </div>
      <div style={signinSectionStyle}>
        <div style={cancelIconContainerStyle} onClick={handleCancel}>
          <FaTimes style={cancelIconStyle} />
        </div>
        <h2 style={headerStyle}>Welcome to MyQuizPal</h2>
        <p style={sentenceStyle}>Good to have you back!</p>
        <form id="signin-form" onSubmit={handleSignIn} action="/signin" method="post">
         <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required style={inputStyle} onChange={handleChange} />
          </div>
          <div style={formGroupStyle} className="password-input">
            <label htmlFor="password" style={labelStyle}>Password</label>
            <div style={{ position: 'relative' }}>
              <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Enter your password" required style={inputStyle}  onChange={handleChange} />
              <div style={eyeIconStyle} onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <Link to="/forgot-password" style={forgotPasswordStyle}>Forgot Password?</Link>
          <div style={formGroupStyle}>
            <button type="submit" style={buttonStyle} disabled={loading}>Sign In
            {loading ? 'Signing In...' : 'Sign in'}
            </button>
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
        <div style={signupLinkStyle}>
          <p>Don&apos;t have an account? <Link to="/signup" style={{ textDecoration: 'none', color: '#673ab7', fontWeight: 'Bold', }}>Sign Up</Link></p>
        </div>

      </div>
    </div>
  );
};

export default SignInPage;
