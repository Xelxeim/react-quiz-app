import React, { useState, useEffect } from "react";

import Counter from "../counter";
import Question from "../question";
import AnswerList from "../answer-list";
import ConfirmBtn from "../confirm-btn";
import Spinner from "../spinner";

import apiInteractor from "../../services/api-interactor";

import './App.scss';

const App = () => {
  const [data, setData] = useState([]),
    [currentNumber, setCurrentNumber] = useState(0),
    [loading, setLoading] = useState(true),
    [userAnswers, setUserAnswers] = useState([]),
    [results, setResults] = useState({})

  useEffect(() => { 
    apiInteractor.getData("https://opentdb.com/api.php?amount=10")
      .then(data => setData(data.results))
      .finally(setLoading(false))
  }, [])

  const addAnswer = (answer) => {
    const answers = [...userAnswers];
    answers.push(answer);
    setUserAnswers(answers);
  }

  const confirmQuestion = () => {
    if (currentNumber < data.length - 1) {
      setCurrentNumber(currentNumber + 1)
    } else {
      // results
    } 
  }

  const renderedContent = () => {
    if (!data[currentNumber]) return <Spinner />;
    const currentQuestion = data[currentNumber];
    const { question, difficulty, type } = currentQuestion;
    const correctAnswer = currentQuestion.correct_answer,
      incorrectAnswers = currentQuestion.incorrect_answers
    return(
      <>
        <Counter currentNumber={currentNumber + 1} amount={data.length} />
        <Question question={question} difficulty={difficulty} type={type} />
        <AnswerList correctAnswer={correctAnswer} incorrectAnswers={incorrectAnswers} type={type} currentNumber={currentNumber} addAnswer={addAnswer} />
        <ConfirmBtn clickHandler={confirmQuestion} />
      </>
    )
  };

  return (
    <div className="App">
      <div className="quiz">
        {loading ? <Spinner /> : renderedContent()}
      </div>
    </div>
  );
}

export default App;
