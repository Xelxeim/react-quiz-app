import React, { useState, useEffect } from "react";

import Counter from "../counter";
import Question from "../question";
import AnswerList from "../answer-list";
import ConfirmBtn from "../confirm-btn";
import Spinner from "../spinner";

import apiInteractor from "../../services/api-interactor";

import './App.scss';

const App = () => {
  const [data, setData] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    apiInteractor.getData("https://opentdb.com/api.php?amount=10")
      .then(data => setData(data.results))
      .finally(setLoading(false))
  }, [])

  console.log(data);
  const renderedContent = () => {
    if (!data[currentNumber]) return <Spinner />;
    const currentQuestion = data[currentNumber-1];
    const { question, difficulty, type } = currentQuestion;
    const correctAnswer = currentQuestion.correct_answer,
      incorrectAnswers = currentQuestion.incorrect_answers
    return(
      <>
        <Counter currentNumber={currentNumber} amount={data.length} />
        <Question question={question} difficulty={difficulty} type={type} />
        <AnswerList correctAnswer={correctAnswer} incorrectAnswers={incorrectAnswers} />
        <ConfirmBtn />
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
