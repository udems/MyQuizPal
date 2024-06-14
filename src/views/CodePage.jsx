import Footer from '../component/Footer';
import Button from '../component/Button';
import FeedbackHeader from '../component/FeedBack-Header';
import profileImg from '../assets/pexels-olly-774909.jpg';

export function CodePage() {
    return(
        <>
            <FeedbackHeader name='Ryan' src={profileImg} />
            <div className='enter-code'>
            <h1>MYQUIZPAL</h1>
            {/* <label htmlFor="code">Enter Your Code</label> */}
            <div>
            <input type="text" id='code-input' placeholder='Enter Your Code' />
            <div className='join-button'><Button text="Join" onClick={() => { window.location.href = '/procede'; }} /></div>
            </div>
            </div>
        <Footer/>
        </>
    );
}