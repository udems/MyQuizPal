import { useEffect, useState } from "react"
import MYQUIZAImage from '../assets/MYQUIZA-removebg-preview.png';
import { Link } from 'react-router-dom';
import Button from '../component/button';
import PropTypes from 'prop-types';


const AuthentcatedHeader =({name,src,alt})=>{
    const [opacity, setOpacity] = useState(1);

    useEffect(()=>{
        const handleScroll = ()=>{
            const scrollTop = window.scrollY;
            const maxScroll = 200; 
            const newOpacity = Math.max(1 - scrollTop / maxScroll, 0.6);

            setOpacity(newOpacity)
        };
        window.addEventListener('scroll',handleScroll)

        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    return(
        <header className="header" style={{opacity}}>
            <nav className="header-nav">
                <div className="img-ul">
                    <div className="img-container">
                    <img className="quiz-img" src={MYQUIZAImage} alt="MYQUIZA" />
                    </div>
                
                    <div className="ul-container">
                    <ul className="header-nav-links">
                    <li><Link to="#teachers">For Teachers</Link></li>
                    <li><Link to="#students">For students</Link></li>
                    <li><Link to="#features">Features</Link></li>
                    <li><Link to="#FAQs">FAQs</Link></li>
                    </ul>
                    </div>
                
                </div>

                <section className="header-others">
                    <Button text = "Enter Assessment Code" onClick={()=>{window.location.href='/Assessment'}} className="btn-assessment"/>
                    
                    <div className="word-container">
                        <p>Welcome&#33;</p>
                        <p className="name-word">{name}</p>
                    </div>

                    <img className="profile-img" src={src} alt={alt} />
                </section>
            </nav>
        </header>
    )

};
AuthentcatedHeader.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

AuthentcatedHeader.defaultProps={
    name:'Guest',
    src:'https://via.placeholder.com/50?text=G',
    alt:'Guest'
}
export default AuthentcatedHeader