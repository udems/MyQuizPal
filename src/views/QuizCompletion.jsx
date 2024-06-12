// QuizCompletionPage.jsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';
import FeedbackHeader from '../component/FeedBack-Header';

const QuizCompletionPage = () => {
  const navigate = useNavigate();
  const score = 75; // This should be passed as a prop or fetched from the quiz result

  const outerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-between',
// Purple background
  };

  const mainContentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1',
    padding: '2rem',
    backgroundColor: '#3a2077'
  };

  const innerContainerStyle = {
    backgroundColor: '#fff', // White background for the inner container
    padding: '2rem',
    marginTop: '9rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
    height: '25rem',
  };

  const sentenceStyle1 = {
    fontSize: '1.4rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#673ab7',
    fontWeight: 'bold',
  };
  const sentenceStyle = {
    fontSize: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
  };
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '1rem',
  };

  const buttonStyle = {
    width: '31%',
    padding: '10px',
    backgroundColor: '#673ab7',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '5rem',
    fontWeight: 'Bold',
    
  };
  const buttonStyle2 = {
    width: '31%',
    padding: '10px',
    backgroundColor: '#ccc',
    color: '#673ab7',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '5rem',
    fontWeight: 'Bold',
  };

  return (
    <div style={outerContainerStyle}>
      <FeedbackHeader/>
      <div style={mainContentStyle}>
        <div style={innerContainerStyle}>
          <div style={{ width: '180px', height: '180px', marginBottom: '1rem', marginLeft: '10rem' }}>
            <CircularProgressbar
              value={score}
              text={`${score}%`}
              styles={buildStyles({
                textColor: '#000',
                pathColor: '#673ab7',
                trailColor: '#d6d6d6',
                strokeWidth: '12',
              })}
            />
          </div>
          <p style={sentenceStyle1}>Congratulations!</p>
          <p style={sentenceStyle}>Quiz completed successfully. Keep up the good work!</p>
          <p style={sentenceStyle}>You attempted 10 questions and from that 7 questions are correct.</p>
          <div style={buttonContainerStyle}>
            <button style={buttonStyle2} onClick={() => navigate('/')}>Back to Home</button>
            <button style={buttonStyle} onClick={() => navigate('/check-correction')}>Check Corrections</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizCompletionPage;
