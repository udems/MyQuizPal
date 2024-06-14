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
          'Content-Type': 'application/json',
        },
        data: data,
      };

      try {
        console.log('Sending request with data:', formData); // Log the request data
        const response = await axios.request(config);
        const responseData = response.data;
        console.log('Received response:', responseData); // Log the response data
        if (responseData && responseData.data) {
          Swal.fire('Success', 'Login successfully', 'success').then(() => {
            navigate('/welcome');
          });
        } else {
          Swal.fire('Error', 'An error occurred while logging in', 'error');
        }
      } catch (error) {
        console.error('Error during sign in:', error); // error logging
        if (error.response) {
          console.error('Server response:', error.response); // Log server response
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
    // navigate('/'); // Redirect to homepage route
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
  const mediaQueryStyles = {
    containerStyle: {
      ...containerStyle,
      flexDirection: 'column',
      height: 'auto',
    },
    logoSectionStyle: {
      ...logoSectionStyle,
      flex: 'none',
      width: '100%',
      height: 'auto',
      padding: '10px',
    },
    signinSectionStyle: {
      ...signinSectionStyle,
      flex: 'none',
      width: '100%',
      padding: '1rem',
    },
    headerStyle: {
      ...headerStyle,
      fontSize: '1.5rem',
      marginBottom: '0.5rem',
    },
    sentenceStyle: {
      ...sentenceStyle,
      fontSize: '0.9rem',
      marginBottom: '1rem',
    },
    formGroupStyle: {
      ...formGroupStyle,
      marginBottom: '0.75rem',
    },
    labelStyle: {
      ...labelStyle,
      marginLeft: '0', // Adjust label margin as needed
    },
    inputStyle: {
      ...inputStyle,
      width: 'calc(100% - 20px)', // Adjust input width to accommodate padding and border
      marginLeft: '0', // Adjust input margin as needed
    },
    forgotPasswordStyle: {
      ...forgotPasswordStyle,
      textAlign: 'left',
    },
    buttonStyle: {
      ...buttonStyle,
      width: '100%',
    },
    googleButtonStyle: {
      ...googleButtonStyle,
      width: '100%',
      fontSize: '1rem',
    },
    orSeparatorStyle: {
      ...orSeparatorStyle,
      marginLeft: '0',
      width: '100%',
    },
    lineStyle: {
      ...lineStyle,
      height: '0.5px', // Adjust line height if needed
    },
    orTextStyle: {
      ...orTextStyle,
      fontSize: '0.9rem',
    },
    signupLinkStyle: {
      ...signupLinkStyle,
      marginTop: '0.5rem',
      textAlign: 'left',
    },
    cancelIconContainerStyle: {
      ...cancelIconContainerStyle,
      right: '14px',
    },
    cancelIconStyle: {
      ...cancelIconStyle,
      fontSize: '10px', // Adjust cancel icon size if needed
    },
    eyeIconStyle: {
      ...eyeIconStyle,
      right: '10px',
    },
  };
  
  // Apply the media query styles if the window width is less than or equal to 740px
  const applyMediaQueryStyles = () => {
    if (window.innerWidth <= 740) {
      Object.assign(containerStyle, mediaQueryStyles.containerStyle);
      Object.assign(logoSectionStyle, mediaQueryStyles.logoSectionStyle);
      Object.assign(signinSectionStyle, mediaQueryStyles.signinSectionStyle);
      Object.assign(headerStyle, mediaQueryStyles.headerStyle);
      Object.assign(sentenceStyle, mediaQueryStyles.sentenceStyle);
      Object.assign(formGroupStyle, mediaQueryStyles.formGroupStyle);
      Object.assign(labelStyle, mediaQueryStyles.labelStyle);
      Object.assign(inputStyle, mediaQueryStyles.inputStyle);
      Object.assign(forgotPasswordStyle, mediaQueryStyles.forgotPasswordStyle);
      Object.assign(buttonStyle, mediaQueryStyles.buttonStyle);
      Object.assign(googleButtonStyle, mediaQueryStyles.googleButtonStyle);
      Object.assign(orSeparatorStyle, mediaQueryStyles.orSeparatorStyle);
      Object.assign(lineStyle, mediaQueryStyles.lineStyle);
      Object.assign(orTextStyle, mediaQueryStyles.orTextStyle);
      Object.assign(signupLinkStyle, mediaQueryStyles.signupLinkStyle);
      Object.assign(cancelIconContainerStyle, mediaQueryStyles.cancelIconContainerStyle);
      Object.assign(cancelIconStyle, mediaQueryStyles.cancelIconStyle);
      Object.assign(eyeIconStyle, mediaQueryStyles.eyeIconStyle);
    }
  };
  
  // Initial application of media query styles
  applyMediaQueryStyles();
  
  // Re-apply media query styles on window resize
  window.addEventListener('resize', applyMediaQueryStyles);
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
            <button type="submit" style={buttonStyle} disabled={loading}>
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
