import React, { useState, useEffect } from 'react';
import { FaStopwatch } from 'react-icons/fa';
import PropTypes from 'prop-types';

const QuestionPage = ({ questionData, questionNumber, totalQuestions, handleNextQuestion, handlePreviousQuestion }) => {
  const [seconds, setSeconds] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1); // State to track selected option index

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Reset selectedOptionIndex when question changes
    setSelectedOptionIndex(-1);
  }, [questionData]); // Reset when questionData changes

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '120vh',
    backgroundColor: '#3a2077',
    paddingTop: '10rem',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: '2rem',
    color: '#fff',
  };

  const questionBoxStyle = {
    backgroundColor: '#3a2077',
    padding: '2rem',
    borderRadius: '10px',
    border: '1px solid #fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    marginBottom: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '9.375rem',
    width: '50rem',
    color: '#fff',
    fontWeight: '700',
  };

  const questionLineStyleLeft = {
    position: 'absolute',
    height: '2px',
    width: '20%',
    backgroundColor: '#fff',
    left: '-10rem',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const questionLineStyleRight = {
    position: 'absolute',
    height: '2px',
    width: '20%',
    backgroundColor: '#fff',
    right: '-10rem',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const optionsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    color: '#fff',
    fontWeight: '700',
  };

  const optionBoxStyle = {
    backgroundColor: '#3a2077',
    padding: '1rem',
    borderRadius: '10px',
    border: '1px solid #fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '28%',
    margin: '2.7rem',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    cursor: 'pointer',
  };

  const optionLineStyleLeft = {
    position: 'absolute',
    height: '2px',
    width: '20%',
    backgroundColor: '#fff',
    left: '-5rem',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const optionLineStyleRight = {
    position: 'absolute',
    height: '2px',
    width: '20%',
    backgroundColor: '#fff',
    right: '-5rem',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: questionNumber === 1 ? 'flex-end' : 'space-between', // Align buttons based on question number
    width: '80%',
    height: '7vh',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#673ab7',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '10vw',
  };

  const handleOptionClick = (optionIndex) => {
    setSelectedOptionIndex(optionIndex); // Update selected option index
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2>Question {questionNumber}/{totalQuestions}</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaStopwatch style={{ marginRight: '0.5rem' }} />
          <span>{formatTime(seconds)}</span>
        </div>
      </div>
      <div style={questionBoxStyle}>
        <div style={questionLineStyleLeft}></div>
        <div style={questionLineStyleRight}></div>
        <p>{questionData.question}</p>
      </div>
      <div style={optionsContainerStyle}>
        {questionData.options.map((option, index) => (
          <div
            key={index}
            style={{
              ...optionBoxStyle,
              backgroundColor: selectedOptionIndex === index ? '#fff' : optionBoxStyle.backgroundColor,
              color: selectedOptionIndex === index ? 'purple' : '#fff', // Change text color when selected
            }}
            onClick={() => handleOptionClick(index)} // Handle option click
          >
            <div style={optionLineStyleLeft}></div>
            <div style={optionLineStyleRight}></div>
            <p>{option}</p>
          </div>
        ))}
      </div>
      <div style={buttonContainerStyle}>
        {questionNumber > 1 && (
          <button style={buttonStyle} onClick={handlePreviousQuestion}>
            Previous Question
          </button>
        )}
        {questionNumber < totalQuestions && (
          <button style={buttonStyle} onClick={handleNextQuestion}>
            Next Question
          </button>
        )}
      </div>
    </div>
  
  );
};

QuestionPage.propTypes = {
  questionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  questionNumber: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  handleNextQuestion: PropTypes.func.isRequired,
  handlePreviousQuestion: PropTypes.func.isRequired,
};

export default QuestionPage;
