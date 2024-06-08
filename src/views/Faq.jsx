
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Faq = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleFaq = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="faq">
        <div className="faq-question" onClick={toggleFaq}>
          {question}
          <span className="faq-toggle">{isOpen ? '-' : '+'}</span>
        </div>
        {isOpen && <div className="faq-answer">{answer}</div>}
      </div>
    );
  };

Faq.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  };

  export default Faq;
