// CheckCorrectionsPage.jsx
// import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';
import FeedbackHeader from '../component/FeedBack-Header';
import profileImg from '../assets/pexels-olly-774909.jpg';

const CheckCorrectionsPage = () => {
  const navigate = useNavigate();
  const score = 75; // This should be passed as a prop or fetched from the quiz result
  const corrections = [
    { question: 'Question 1', correctAnswer: 'Answer A', yourAnswer: 'Answer B' },
    { question: 'Question 2', correctAnswer: 'Answer C', yourAnswer: 'Answer C' },
    { question: 'Question 3', correctAnswer: 'Answer D', yourAnswer: 'Answer A' },
    // Add more corrections as needed
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
    backgroundColor: '#673ab7',
  };

  const innerContainerStyle = {
    backgroundColor: '#fff', // White background for the inner container
    padding: '2rem',
    marginTop: '3rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
  };

  const correctionsGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '2rem',
  };

  const correctionItemStyle = {
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const headerStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
  };

  const sentenceStyle1 = {
    fontSize: '1.4rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#673ab7',
    fontWeight: 'bold',
  };

  // const sentenceStyle = {
  //   fontSize: '1rem',
  //   marginBottom: '1rem',
  //   textAlign: 'center',
  // };

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
      <FeedbackHeader name='Ryan' src={profileImg} style={{backgroundColor:'#673AB7'}}/>
      <div style={mainContentStyle}>
        <div style={innerContainerStyle}>
          <h2 style={headerStyle}>Check Corrections</h2>
          <div style={correctionsGridStyle}>
            {corrections.map((correction, index) => (
              <div key={index} style={correctionItemStyle}>
                <p><strong>{correction.question}</strong></p>
                <p><strong>Correct Answer:</strong> {correction.correctAnswer}</p>
                <p><strong>Your Answer:</strong> {correction.yourAnswer}</p>
              </div>
            ))}
          </div>
          <p style={sentenceStyle1}>Your Score: {score}%</p>
          <div style={buttonContainerStyle}>
            <button style={buttonStyle} onClick={() => navigate('/')}>Back to Home</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckCorrectionsPage;
