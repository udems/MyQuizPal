import { useState, useEffect } from 'react';
import { FaStopwatch } from 'react-icons/fa';
import Footer from '../component/Footer';

const QuestionPage = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
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
    width: '28%', // Adjust the width to be smaller
    margin: '1.5rem', // Adjust the margin to control the gap
    position: 'relative',
    marginLeft: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px', // Adjust the height as needed
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
  const footerStyle = {
    position: 'fixed', // Fixed position to ensure it stays at the bottom of the viewport
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: '#6a0dad', // Footer background color
    color: '#fff', // Footer text color
    padding: '1rem',
    textAlign: 'center',
  };

  return (
    <>
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2>Question 1/10</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaStopwatch style={{ marginRight: '0.5rem' }} />
          <span>{formatTime(seconds)}</span>
        </div>
      </div>
      <div style={questionBoxStyle}>
        <div style={questionLineStyleLeft}></div>
        <div style={questionLineStyleRight}></div>
        <p>What is the capital of France?</p>
      </div>
      <div style={optionsContainerStyle}>
        <div style={optionBoxStyle}>
          <div style={optionLineStyleLeft}></div>
          <div style={optionLineStyleRight}></div>
          <p>Paris</p>
        </div>
        <div style={optionBoxStyle}>
          <div style={optionLineStyleLeft}></div>
          <div style={optionLineStyleRight}></div>
          <p>London</p>
        </div>
        <div style={optionBoxStyle}>
          <div style={optionLineStyleLeft}></div>
          <div style={optionLineStyleRight}></div>
          <p>Berlin</p>
        </div>
        <div style={optionBoxStyle}>
          <div style={optionLineStyleLeft}></div>
          <div style={optionLineStyleRight}></div>
          <p>Madrid</p>
        </div>
      </div>
    </div>
    <Footer style={footerStyle} />
    </>
  );
};

export default QuestionPage;
