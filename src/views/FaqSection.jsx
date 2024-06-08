import PropTypes from 'prop-types';
import Faq from '../views/Faq';
import './FaqCss/FaqSection.css';

const FaqSection = ({ faqs }) => {
    return (
      <div className="faq-section">
        <h2>FAQs</h2>
        {faqs.map((faq, index) => (
          <Faq key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    );
  };
  
  FaqSection.propTypes = {
    faqs: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default FaqSection;