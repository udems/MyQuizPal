import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaTimes,} from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';
import './SignUp.css';


const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Swal.fire('Error', 'All fields are required', 'error');
      return false;
    }
    if (password !== confirmPassword) {
      Swal.fire('Error', 'Passwords do not match', 'error');
      return false;
    }
    if (password.length && confirmPassword.length < 8) {
      Swal.fire('Error', 'Password must be at least 8 characters long', 'error');
      return false;
    }
    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true); // Set loading state to true
      let data = JSON.stringify(formData);
      let config = {
        method: 'POST',
        url: 'https://myquizpal.onrender.com/api/register/student', // Ensure this URL is correct
        headers: { 
          'Content-Type': 'application/json'
        },
        data: data
      };

      try {
        const response = await axios.request(config);
        const responseData = response.data;
        if (responseData && responseData.data.studentId) {
          Swal.fire('Success', 'Account created successfully, redirecting to signin', 'success').then(() => {
            navigate('/signin');
          });
        } else {
          Swal.fire('Error', 'An error occurred while creating your account', 'error');
        }
      } catch (error) {
        console.log(error)
        if (error.response) {
          if (error.response.status === 409) {
            Swal.fire('Error', 'User with the provided credentials already exists', 'error');
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
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const navigate = useNavigate();


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
    height: '100vh',
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

  const mediaQueryStyles = {
    containerStyle: {
      ...containerStyle,
      flexDirection: 'column',
      width: '95%',
      height: 'auto',
    },
    cancelIconContainerStyle: {
      ...cancelIconContainerStyle,
      top: '170px',
      right: '20px',
    },
    logoSectionStyle: {
      ...logoSectionStyle,
      flex: 'none',
      width: '100%',
      height: 'auto',
      padding: '10px',
    },
    signupSectionStyle: {
      ...signupSectionStyle,
      flex: 'none',
      width: '100%',
      padding: '10px',
    },
    labelStyle: {
      display: 'block',
      marginBottom: '5px',
      marginLeft: '1.5rem',
    },
    inputStyle: {
      ...inputStyle,
      width: '88%',
      marginLeft: '1.5rem',
    },
    inputHalfStyle: {
      ...inputHalfStyle,
      width: '80%',
      marginLeft: '1rem',
      marginTop: '1rem',  // Ensure lastname comes down
    },

    firstNameStyle: {
      ...firstNameStyle,
      marginRight: '0.1rem',
      marginLeft: '0.3rem' // Add margin to the right
    },
    
    lastNameStyle: {
      ...inputHalfStyle,
    },
    
    buttonStyle: {
      ...buttonStyle,
      width: '88%',
      marginLeft: '1.5rem',
    },
    googleButtonStyle: {
      ...googleButtonStyle,
      width: '90%',
      marginLeft: '1rem',
    },
    headerStyle: {
      ...headerStyle,
      marginLeft: '1rem',
    },
    sentenceStyle: {
      ...sentenceStyle,
      marginLeft: '1rem',
    },
    orSeparatorStyle: {
      ...orSeparatorStyle,
      marginLeft: '2.2rem',
      width: '80%',
    },
    eyeIconStyle: {
      ...eyeIconStyle,
      right: '1.5rem',
    },
  };
  
  // Apply the media query styles if the window width is less than or equal to 740px
  const applyMediaQueryStyles = () => {
    if (window.innerWidth <= 740) {
      Object.assign(containerStyle, mediaQueryStyles.containerStyle);
      Object.assign(cancelIconContainerStyle, mediaQueryStyles.cancelIconContainerStyle);
      Object.assign(logoSectionStyle, mediaQueryStyles.logoSectionStyle);
      Object.assign(signupSectionStyle, mediaQueryStyles.signupSectionStyle);
      Object.assign(inputStyle, mediaQueryStyles.inputStyle);
      Object.assign(labelStyle, mediaQueryStyles.labelStyle);
      Object.assign(inputHalfStyle, mediaQueryStyles.inputHalfStyle);
      Object.assign(firstNameStyle, mediaQueryStyles.firstNameStyle);
      Object.assign(buttonStyle, mediaQueryStyles.buttonStyle);
      Object.assign(googleButtonStyle, mediaQueryStyles.googleButtonStyle);
      Object.assign(headerStyle, mediaQueryStyles.headerStyle);
      Object.assign(sentenceStyle, mediaQueryStyles.sentenceStyle);
      Object.assign(orSeparatorStyle, mediaQueryStyles.orSeparatorStyle);
      Object.assign(eyeIconStyle, mediaQueryStyles.eyeIconStyle);
    }
  };
  
  // Initial application of media query styles
  applyMediaQueryStyles();
  
  // Re-apply media query styles on window resize
  window.addEventListener('resize', applyMediaQueryStyles);

  return (
    <div className='container' style={containerStyle}>
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
              <input type="text" id="firstName" name="firstName" placeholder='Enter your first name' required style={inputHalfStyle} onChange={handleChange} />
            </div>
            <div style={{ flex: '1' }}>
              <label htmlFor="lastName" style={labelStyle}>Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder='Enter your last name' required style={{ ...inputHalfStyle, marginRight: '0' }} onChange={handleChange} />
            </div>
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input type="email" id="email" name="email" placeholder='Enter your email address' required style={inputStyle} onChange={handleChange}/>
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="phone_number" style={labelStyle}>Phone Number</label>
            <input type="phoneNumber" id="phoneNumber" name="phoneNumber" placeholder='Enter your Phone Number' required style={inputStyle} onChange={handleChange}/>
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>Password</label>
            <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder='Enter your password' required style={inputStyle} onChange={handleChange}/>
            <div style={eyeIconStyle} onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="confirmPassword" style={labelStyle}>Confirm Password</label>
            <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" placeholder='Confirm your password'required style={inputStyle} onChange={handleChange}/>
            <div style={eyeIconStyle} onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div style={formGroupStyle}>
            <button type="submit" style={buttonStyle} disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
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
        <div style={signInLinkStyle}>
          <p>Already have an account? <Link to="/signin" style={{ textDecoration: 'none', color: '#673ab7', fontWeight: 'Bold', }}>Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;