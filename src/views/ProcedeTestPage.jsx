import Footer from '../component/Footer';
import Button from '../component/button';
// import EnterCode from '../component/EnterCode-Header';


export function ProcedeTestPage() {
    return(
        <>
        <div className='procede-test'>
           <h1>Our quiz platform is here to guide you through an engaging and <br/> interactive journey!</h1>
           <div className='box-container'>
                <div className="box" style={{backgroundColor:'#D8D2E0'}}>
                    <img src="src/assets/Honesty.png" alt="Box" className="box-image" />
                    <h3 className='box-text'>Read each questions carefully</h3>
                    <p className="box-text">Take your time to understand each question before selecting an answer.</p>
                </div>
                <div className="box" style={{backgroundColor:'#F3EFF9'}}>
                    <img src="src/assets/Choose.png" alt="Box" className="box-image" />
                    <h3 className='box-text'>Choose the Best Answer</h3>
                    <p className="box-text">Select the option that you believe is the most accurate or appropriate response.</p>
                </div>
                <div className="box" style={{backgroundColor:'#AF9ED7'}}>
                    <img src="src/assets/Time.png" alt="Box" className="box-image" />
                    <h3 className='box-text'>Keep Track of Time</h3>
                    <p className="box-text">This is a timed quiz, monitor the timer to ensure you complete the quiz within the allocated time.</p>
                </div>
                <div className="box" style={{backgroundColor:'#512DA8', color:'white'}}>
                    <img src="src/assets/Submit for Approval.png" alt="Box" className="box-image" />
                    <h3 className='box-text'>Submit Your Answers</h3>
                    <p className="box-text">Once youve answered all the questions, click the Submit button to see your results.</p>
                </div>
                <div className="box" style={{backgroundColor:'#EBEBEB'}}>
                    <img src="src/assets/Relax.png" alt="Box" className="box-image" />
                    <h3 className='box-text'>Enjoy the Quiz</h3>
                    <p className="box-text">Relax, have fun, and test your knowledge! Good luck!</p>
                </div>
           </div>
           <div style={{display:'flex', gap:'600px', paddingTop:'30px'}}>
                <p style={{fontSize:'24px'}}>Lets dive in and embark on this quiz adventure together! Click <br/> the Start Quiz button to begin your quest for knowledge.</p>
                <Button text="Start quiz" onClick={() => { window.location.href = '/signup'; }} />
           </div>
        </div>
        <Footer/>
        </>
    );
}