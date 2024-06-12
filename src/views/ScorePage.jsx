import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ScorePage = ({ totalQuestions, attemptedQuestions, correctAnswers, handleGoBack, handleCheckCorrections }) => {
  const percentage = (correctAnswers / totalQuestions) * 100;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#3a2077',
    color: '#fff',
    textAlign: 'center',
    padding: '2rem',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2rem',
    width: '50%',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#6a0dad',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={{ width: '200px', height: '200px', marginBottom: '2rem' }}>
        <CircularProgressbar
          value={percentage}
          text={`Score: ${percentage.toFixed(2)}%`}
          styles={buildStyles({
            textSize: '16px',
            pathColor: '#ff1493',
            textColor: '#fff',
            trailColor: '#d6d6d6',
          })}
        />
      </div>
      <h2>Congratulations!</h2>
      <p>You attempted {attemptedQuestions} out of {totalQuestions} questions.</p>
      <p>You got {correctAnswers} correct answers.</p>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={handleGoBack}>Go Back</button>
        <button style={buttonStyle} onClick={handleCheckCorrections}>Check Corrections</button>
      </div>
    </div>
  );
};

ScorePage.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  attemptedQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  handleGoBack: PropTypes.func.isRequired,
  handleCheckCorrections: PropTypes.func.isRequired,
};

export default ScorePage;
