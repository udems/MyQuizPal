import Footer from '../component/Footer';
import Button from '../component/button';


export function ProcedeTestPage() {
    return(
        <>
        <div className='procede-test'>
           <h1>Our quiz platform is here to guide you through an engaging and interactive journey!</h1>
           <div className='box-container'>
                <div className="box">
                    <img src="" alt="Box" className="box-image" />
                    <h3 className='box-text'>Read each questions carefully</h3>
                    <p className="box-text">Take your time to understand each question before selecting an answer.</p>
                </div>
                <div className="box">
                    <img src="" alt="Box" className="box-image" />
                    <h3 className='box-text'>Choose the Best Answer</h3>
                    <p className="box-text">Select the option that you believe is the most accurate or appropriate response.</p>
                </div>
                <div className="box">
                    <img src="" alt="Box" className="box-image" />
                    <h3 className='box-text'>Keep Track of Time</h3>
                    <p className="box-text">This is a timed quiz, monitor the timer to ensure you complete the quiz within the allocated time.</p>
                </div>
                <div className="box">
                    <img src="" alt="Box" className="box-image" />
                    <h3 className='box-text'>Submit Your Answers</h3>
                    <p className="box-text">Once youve answered all the questions, click the Submit button to see your results.</p>
                </div>
                <div className="box">
                    <img src="" alt="Box" className="box-image" />
                    <h3 className='box-text'>Enjoy the Quiz</h3>
                    <p className="box-text">Relax, have fun, and test your knowledge! Good luck!</p>
                </div>
           </div>
           <div className=''>
                <p>Lets dive in and embark on this quiz adventure together! Click the Start Quiz button to begin your quest for knowledge.</p>
                <Button/>
           </div>
        </div>
        <Footer/>
        </>
    );
}