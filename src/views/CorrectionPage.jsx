// CheckCorrectionsPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';
import FeedbackHeader from '../component/FeedBack-Header';

const CheckCorrectionsPage = () => {
  const navigate = useNavigate();
  const corrections = [
    { question: '1. The situation in which parents are willing and are able to make sensible decisions regarding their family is referred to as?', correctAnswer: 'Responsible parenthood', explanation: '' },
    { question: '3. All but one is not an important factor in responsible parenthood.', correctAnswer: 'Formal education', explanation: '' },
  ];

  const outerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '150vh',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0', // General background color
    padding: '0',
    margin: '0',
  };

  const mainContentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1',
    padding: '2rem',
    backgroundColor: '#3a2077',
  };

  const innerContainerStyle = {
    backgroundColor: '#3a2077', // White background for the inner container
    padding: '2rem',
    marginTop: '3rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    width: '100%',
    color: '#fff',
    textAlign: 'left',
  };

  const correctionsGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '2rem',
  };

  const correctionItemStyle = {
    flex: '1 1 calc(50% - 1rem)',
    padding: '1rem',
    borderRadius: '5px',
    boxSizing: 'border-box',
  };

  const headerStyle = {
    fontSize: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
  };

  const sentenceStyle1 = {
    fontSize: '1.4rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#673ab7',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 'Bold',
  };

  return (
    <div style={outerContainerStyle}>
      <FeedbackHeader />
      <div style={mainContentStyle}>
        <div style={innerContainerStyle}>
          <h2 style={headerStyle}>Check Corrections</h2>
          <div style={correctionsGridStyle}>
            {corrections.map((correction, index) => (
              <div key={index} style={correctionItemStyle}>
                <p><strong >{correction.question}</strong></p> <br /><br />
                <p><strong>Correct Answer:</strong><br /><br /> {correction.correctAnswer}</p>
                <p>{correction.explanation}</p>
                <p>There is no particular order definition of responsible parenthood. However, it is referred to as the situation in which parents are willing and are able to make sensible decisions regarding their family.</p>
                <p>The option ‘B’ Formal education is one of the roles of being a responsible parent. It involves the ability of the parents to send their children to good schools, buy necessary books for them, be sure to track and follow up with their academic progress.</p>
              </div>
            ))}
          </div>
          <p style={sentenceStyle1}>Your Score: 3/5</p>
          <div style={buttonContainerStyle}>
            <button style={buttonStyle} onClick={() => navigate('/welcome')}>Back to Home</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckCorrectionsPage;
