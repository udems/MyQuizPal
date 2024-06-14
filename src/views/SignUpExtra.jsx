import { Link } from 'react-router-dom';
import { FaTimes, FaGoogle } from 'react-icons/fa';
import MYQUIZAImage from '../assets/MYQUIZA-removebg-preview.png';
import profileImg from '../assets/pexels-olly-774909.jpg';

const SignUp_Extra=()=>{

    return(
        <>
        <div className="entire-page">
        <main className='mainContainer'>
                <div className="secondContainer">

                <div className="img-container">
                    <img src={MYQUIZAImage} alt="MYQUIZAImage"  onClick={() => { window.location.href = "/" }} />
                </div>

                <section className="signup-page-container">

                    <button className='cancel-btn'>
                        <FaTimes className='img'/>
                    </button>
                    <div className="second-signup-page-container">
                    <div className="welcome">
                        <h2>Welcome to MyQuizPal</h2>
                        <p>Proceed to sign up as&#59;</p>
                    </div>

                <section className="role-container">
                    <div className="teacher-container">
                        <img src={profileImg} alt="profile picture" />
                        <button >
                            Teacher</button>

                    </div>

                    <div className="student-container">
                        <img src={profileImg} alt="profile picture" />
                        <button>Student</button>
                    </div>

                    <div className="administrator-container">
                        <img src={profileImg} alt="profile picture" />
                        <button>Administrator</button>
                    </div>
                </section>

                <div className="container-verify">
                    <Link to="/signup"><button>
                        Sign Up
                        </button></Link>
                    
               
                <div className='orSeparatorStyle'>
                    <div className='lineStyle'></div>
                    <span className='orTextStyle'>OR</span>
                    <div className='lineStyle'></div>
                </div>

                <button className='signUp-Google'>
                <img src="./src/assets/google_symbol.svg.png" alt="Google Logo" />
                    Sign Up with Google</button>

                <p>Already have an account&#63; <Link to ="/signin" className='link-signin'>Sign In</Link></p>
                </div>
                    </div>
                    
                </section>
                </div>
                
            </main>
        </div>
            
        </>
        
    )
}
export default SignUp_Extra;