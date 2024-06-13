import Footer from '../component/Footer'
import Button from '../component/Button';
import EnterCode from '../component/EnterCode-Header';

export function CodePage() {
    return(
        <>
        <EnterCode/>
        <div className='enter-code'>
            <h1>MYQUIZPAL</h1>
            {/* <label htmlFor="code">Enter Your Code</label> */}
            <div>
            <input type="text" id='code-input' placeholder='Enter Your Code' />
            <div className='join-button'><Button text="Join" onClick={() => { window.location.href = '/join'; }} /></div>
            </div>
        </div>
        <Footer/>
        </>
    );
}