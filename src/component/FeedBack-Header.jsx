import MYQUIZAImage from '../assets/MYQUIZA-removebg-preview.png';
import { useEffect, useState } from "react"
import PropTypes from 'prop-types'

const FeedbackHeader=({name,src,alt})=>{
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
        <header className='header header-enter-code' style={{opacity, backgroundColor: '#4A2999'}}>
           <div className="img-container">
                <img className="quiz-img" src={MYQUIZAImage} alt="MYQUIZA" />
            </div>

            <section className="header-others">
                <img className="profile-img" src={src} alt={alt} />
    
                <p>{name}</p>
            </section>
        </header>
    )

};
FeedbackHeader.propTypes={
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

FeedbackHeader.defaultProps={
    name:'Guest',
    src: 'https://via.placeholder.com/50?text=G',
    alt:'Guest'
}


export default FeedbackHeader