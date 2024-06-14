import Footer from '../component/Footer';
import Button from '../component/button';
import FeedbackHeader from '../component/FeedBack-Header';
import profileImg from '../assets/pexels-olly-774909.jpg';
import { useState } from 'react';

export function CodePage() {
    const [code, setcode] = useState('')

    const verifyOtp = () => {
        if(code.trim() !== 'b2dcd7'){
            alert('wrong code')
        }else{
            window.location.href = '/procede';
        }
    }
    return(
        <>
            <FeedbackHeader name='Ryan' src={profileImg} />
            <div className='enter-code'>
            <h1>MYQUIZPAL</h1>
            {/* <label htmlFor="code">Enter Your Code</label> */}
            <div>
            <input type="text" id='code-input' placeholder='Enter Your Code' onChange={(e) => setcode(e.target.value)} />
            <div className='join-button'><Button text="Join" onClick={verifyOtp} /></div>
            </div>
            </div>
        <Footer/>
        </>
    );
}