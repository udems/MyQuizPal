import {useEffect, useState} from 'react';
import Button from '../Button/Button/';
import { Link } from 'react-router-dom';


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
                <ul className="header-nav-links">
                    <li><Link to="#teachers">For Teachers</Link></li>
                    <li><Link to="#students">For students</Link></li>
                    <li><Link to="#features">Features</Link></li>
                    <li><Link to="#FAQs">FAQs</Link></li>
                </ul>
                <div className="header-nav-buttons">
                    <Button text="Sign In" onClick={() => { window.location.href = '/signin'; }} />
                    <Button text="Sign Up" onClick={() => { window.location.href = '/signup'; }} />
                </div>
            </nav>
        </header>

    )
}


export default Header