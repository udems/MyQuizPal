import MYQUIZAImage from '../assets/MYQUIZA-removebg-preview.png';
import Button from './Button';

const EnterCode = ()=>{
    return (
        <header className="header header-enter-code">
            <img src={MYQUIZAImage} alt="MYQUIZA" className="quiz-img" />

            <div className="header-nav-buttons">
                    <Button text="My Dashboard" onClick={() => { window.location.href = '/signin'; }} className='btn-enter-code'/>
                    <Button text="Categories" onClick={() => { window.location.href = '/signup'; }} className='btn-enter-code'/>
                </div>
        </header>
    )
}
export default EnterCode