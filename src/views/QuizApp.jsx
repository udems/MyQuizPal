// src/QuizApp.js

import React, { useState } from 'react';
import QuestionPage from './QuestionPage';
import Footer from '../component/Footer';
import questions from './questions';

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div>
      <QuestionPage 
        questionData={questions[currentQuestionIndex]} 
        questionNumber={currentQuestionIndex + 1} 
        totalQuestions={questions.length} 
        handleNextQuestion={handleNextQuestion}
        handlePreviousQuestion={handlePreviousQuestion}
      />
      <Footer />
    </div>
  );
};

export default QuizApp;
