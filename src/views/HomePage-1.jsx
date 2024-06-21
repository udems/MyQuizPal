import AuthentcatedHeader from '../component/Authentcated-Header';
import FaqSection from './FaqSection';
import { faqs } from '../data';
import Footer from '../component/Footer';
import profileImg from '../assets/pexels-olly-774909.jpg';
import Button from '../component/button';
import pic1 from '../assets/istockphoto-1490709077-170667a 1.png';
import pic2 from '../assets/istockphoto-1286100048-612x612 1.png';
import pic3 from '../assets/unsplash_cbL3UVrDozk.png';
import pic4 from '../assets/istockphoto-1490656132-170667a 1.png';
import pic5 from '../assets/istockphoto-861128944-170667a 1.png';
import pic6 from '../assets/image 2.png';
function HomePage1() {

    return(
        <>
        <AuthentcatedHeader name='Sawyer Ryan' src={profileImg}/>

        <div className="interact-flex" >
            <div className="interact">
                <h2>Interactive Quizzes For Smarter Learning</h2>
                <p>Transform your classroom into interactive learning hub with MyQuizPal
                    dynamic quizzes and real-time feedback
                </p>
                <div className='interact-button-1'><Button text="Register School" onClick={() => { window.location.href = '/signup'; }} /></div>
                <div className='interact-button-2'>
                <Button text="Practice quiz" onClick={() => { window.location.href = '/practice-quiz'; }} />
                </div>
            </div>
            <div className="img1">
                <img src={pic1} alt="" />
            </div>
            
        </div>
        <div className="empower-flex" id='teachers'>
            <div className="img2">
                <img src={pic2} alt="" />
            </div>
            <div className="empower">
                <h2>Empower Your Teaching </h2>
                <p>Create  quizzes that fit your specific  teaching needs. With MyQuizPal , teachers can easily design and customize quizzes to align with their curriculum, ensuring relevance and maximizing student engagement.
                </p>
                <div className='empower-button'><Button text="Create Quiz" onClick={() => { window.location.href = '/create'; }} /></div>
            </div>
        </div>
        <div className="learning-flex" id="students">
            <div className="learning">
                <h2>Learning Made Fun</h2>
                <p>Experience a new way of learning with MyQuizPal. Interactive quizzes , instant feedback, and gamified element like badges and leaderboards make studying exciting and rewarding for students.</p>
                <div className='learning-button'><Button text="Take Assessment" onClick={() => { window.location.href = '/code'; }} /></div>
            </div>
            <div className="img3">
                <img src={pic3} alt="" />
            </div>
        </div>
        <div className="key" id='features'>
            <h1>KEY FEATURES</h1>
        </div>
        <div className="engage-flex">
            <div className="img4">
                <img src={pic4} alt="" />
            </div>
            <div className="engage">
                <h2>Interactive Quizzes</h2>
                <p>Our quizzes are designed  to keep students engaged and motivated, make learning a fun and interactive experience.
                </p>
                <div className='engage-button'><Button text="Enter Code" onClick={() => { window.location.href = '/code'; }} /></div>
            </div>
        </div>
        <div className="real-flex">
            <div className="real">
                <h2>Real-Time  Correction Feedback</h2>
                <p>Instant grading and feedback  help students learn from their mistakes and improve quickly.
                </p>
            </div>
            <div className="img5">
                <img src={pic5} alt="" />
            </div>
        </div>
        <div className="progress-flex">
            <div className="img6">
                <img src={pic6} alt="" />
            </div>
            <div className="progress">
                <h2>Progress Tracking</h2>
                <div>Comprehensive  reports and intuitive dashboards provide clear insights into student performance and progress. 
                    <p className="soon">Coming Soon!</p>
                </div>
            </div>
        </div>
        <FaqSection faqs={faqs} />
        <Footer/>
        </>
    )
}

export default HomePage1;
