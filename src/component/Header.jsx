import {useEffect, useState} from 'react';
import Button from '../component/button';
// import { Link } from 'react-router-dom';


function Header(){

        const [opacity, setOpacity] = useState(1);

        useEffect(()=>{
            const handleScroll = () => {
                const scrollTop = window.scrollY;
                const maxScroll = 200; //max scroll distance to fade out
                const newOpacity = Math.max(1 - scrollTop / maxScroll, 0.6); //fades out to 0.3 opacity
                setOpacity(newOpacity);
            };
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

    return(
        <header className="header" style={{opacity}}>
            <nav className="header-nav">
                <div className='header-logo-links'>
                    <div className="logo-container">
                        <img src="src\assets\MYQUIZA-removebg-preview.png" alt="Logo" className="logo" />
                    </div>
                    <ul className="header-nav-links">
                        <li><a href="#teachers"> For Teachers </a></li>
                        <li><a href='#students'>For students</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#FAQs">FAQs</a></li>
                    </ul>
                </div>
                <div className="header-nav-buttons">
                    <Button text="Sign In" onClick={() => { window.location.href = '/signin'; }} />
                    <Button text="Sign Up" onClick={() => { window.location.href = '/signup'; }} />
                </div>
            </nav>
        </header>

    )
}


export default Header