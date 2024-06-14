
import Header from '../component/Header';
import FaqSection from '../views/FaqSection';
import { faqs } from '../data';
import Button from '../component/button';
import Footer from '../component/Footer';

function HomePage() {

    return(
        <>
        <Header/>
        <div className="interact-flex" >
            <div className="interact">
                <h2>Interactive Quizzes For Smarter Learning</h2>
                <p>Transform your classroom into interactive learning hub with MyQuizPal
                    dynamic quizzes and real-time feedback
                </p>
                <div className='interact-button-1'><Button text="Sign up Now" onClick={() => { window.location.href = '/signup'; }} /></div>
                <div className='interact-button-2'>
                <Button text="Practice quiz" onClick={() => { window.location.href = '/signup'; }} />
                </div>
            </div>
            <div className="img1">
                <img src="src\assets\istockphoto-1490709077-170667a 1.png" alt="" />
            </div>
        </div>
        <div className="empower-flex" id='teachers'>
            <div className="img2">
                <img src="src\assets\istockphoto-1286100048-612x612 1.png" alt="" />
            </div>
            <div className="empower">
                <h2>Empower Your Teaching </h2>
                <p>Create  quizzes that fit your specific  teaching needs. With MyQuizPal , teachers can easily design and customize quizzes to align with their curriculum, ensuring relevance and maximizing student engagement.
                </p>
                <div className='empower-button'><Button text="Create Quiz" onClick={() => { window.location.href = '/signup'; }} /></div>
            </div>
        </div>
        <div className="learning-flex" id="students">
            <div className="learning">
                <h2>Learning Made Fun</h2>
                <p>Experience a new way of learning with MyQuizPal. Interactive quizzes , instant feedback, and gamified element like badges and leaderboards make studying exciting and rewarding for students.
                </p>
                <div className='learning-button'><Button text="Take Assessment" onClick={() => { window.location.href = '/signup'; }} /></div>
            </div>
            <div className="img3">
                <img src="src\assets\unsplash_cbL3UVrDozk.png" alt="" />
            </div>
        </div>
        <div className="key" id='features'>
            <h1>KEY FEATURES</h1>
        </div>
        <div className="engage-flex">
            <div className="img4">
                <img src="src\assets\istockphoto-1490656132-170667a 1.png" alt="" />
            </div>
            <div className="engage">
                <h2>Interactive Quizzes</h2>
                <p>Our quizzes are designed  to keep students engaged and motivated, make learning a fun and interactive experience.
                </p>
                <div className='engage-button'><Button text="Enter Code" onClick={() => { window.location.href = '/signin'; }} /></div>
            </div>
        </div>
        <div className="real-flex">
            <div className="real">
                <h2>Real-Time  Correction Feedback</h2>
                <p>Instant grading and feedback  help students learn from their mistakes and improve quickly.
                </p>
            </div>
            <div className="img5">
                <img src="src\assets\istockphoto-861128944-170667a 1.png" alt="" />
            </div>
        </div>
        <div className="progress-flex">
        <div className="img6">
                <img src="src\assets\image 2.png" alt="" />
            </div>
            <div className="progress">
                <h2>Progress Tracking</h2>
                <div>Comprehensive  reports and intuitive dashboards provide clear insights into student performance and progress. 
                    {/* changed this from p tag to div  */}
                    <p className="soon">Coming Soon! </p> 
                    {/* changed this from div to p tag */}
                </div>
            </div>
        </div>
        <FaqSection id="faqsPage" faqs={faqs} />
        <Footer/>
        </>
    )
}

export default HomePage;