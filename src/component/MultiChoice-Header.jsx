import MYQUIZAImage from '../assets/MYQUIZA-removebg-preview.png';
import { useEffect, useState } from "react";
import { FaMicrochip } from "react-icons/fa6";
import { FaStar } from 'react-icons/fa';

const MultiChoiceHeader=()=>{
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
        <header className='header header-enter-code' style={{opacity}}>
           <div className="img-container">
                <img className="quiz-img" src={MYQUIZAImage} alt="MYQUIZA" />
            </div>

            <section className="header-others">
                <button onClick={()=>{window.location.href='/'}} className="btn btn-hints" >Hints
                <FaMicrochip className='chip-icons'/>
                </button>
                    
                <button onClick={()=>{window.location.href='/'}} className="btn btn-grades" >Grades
                <div className="store-stars">
                    <FaStar className='stars-icons yellow'/>
                    <FaStar className='stars-icons yellow'/>
                    <FaStar className='stars-icons'/>
                </div>
                </button>
                </section>
        </header>
    )

};

export default MultiChoiceHeader