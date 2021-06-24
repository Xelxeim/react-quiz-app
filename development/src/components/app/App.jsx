import React, { useState, useEffect } from "react";

import Counter from "../counter";
import Question from "../question";
import AnswerList from "../answer-list";
import ConfirmBtn from "../confirm-btn";
import Spinner from "../spinner";
import Results from "../results";

import apiInteractor from "../../services/api-interactor";

import './App.scss';

const App = () => {
  const [data, setData] = useState([]),
    [currentNumber, setCurrentNumber] = useState(0),
    [loading, setLoading] = useState(true),
    [userAnswers, setUserAnswers] = useState({}),
    [results, setResults] = useState({}),
    [quizEnd, setQuizEnd] = useState(false)

  useEffect(() => { 
    apiInteractor.getData("https://opentdb.com/api.php?amount=10")
      .then(data => setData(data.results))
      .finally(setLoading(false))
  }, [])

  const extractUserAnswer = (object) => {  // item[0] - answer, item[1] - bool value, which indicates if user chose this option (for situation, when he chose option and then changed his mind)
    const answers = [];
    const arrayOfArray = Object.entries(object);

    arrayOfArray.forEach(item => {
      if (item[1] === true) answers.push(item[0]);
    })
    return answers;
  }

  const compareResults = (answers, correctAnswer) => {
    if (!Array.isArray(correctAnswer) && answers.length === 1 && answers[0] === correctAnswer) return true //check for 1 answer
    if (answers.length !== correctAnswer.length) return false
    answers.sort();
    correctAnswer.sort();
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === correctAnswer[i]) continue;
      else return false;
    }
    return true;
  }

  const onChangeHandler = (e, type) => {
    const { id, checked } = e.target;
    switch (type) {
      case "multiple":
        setUserAnswers({
          ...userAnswers,
          [id]: checked 
        });
        break;
      case "boolean":
        setUserAnswers({
          [id]: checked 
        });
        break;
      default: break;
    }
  }

  const renderedContent = () => {
    if (!data[currentNumber]) return <Spinner />;
    const currentQuestion = data[currentNumber];
    const { question, difficulty, type } = currentQuestion;
    const correctAnswer = currentQuestion.correct_answer; 
    const incorrectAnswers = currentQuestion.incorrect_answers;

    const confirmQuestion = () => {
      if (currentNumber <= data.length) {
        const questionResult = compareResults(extractUserAnswer(userAnswers), correctAnswer);

        setResults({
          ...results,
          [currentNumber]: {
            result: questionResult,
            difficulty: difficulty
          },
        });

        setCurrentNumber(currentNumber + 1)
        setUserAnswers({})
      }

      if (currentNumber === data.length - 1) {
        setQuizEnd(true)
      }
    }

    return(
      <>
        <Counter currentNumber={currentNumber + 1} amount={data.length} />
        <Question question={question} difficulty={difficulty} type={type} />
        <AnswerList correctAnswer={correctAnswer} incorrectAnswers={incorrectAnswers} type={type} currentNumber={currentNumber} onChangeHandler={onChangeHandler} />
        <ConfirmBtn clickHandler={confirmQuestion} />
      </> 
    )
  };

  return (
    <div className="App">
      <div className="quiz">
        {!quizEnd ?
          loading ? <Spinner /> : renderedContent()
          :
          <Results results={results}/>
        }
        
      </div>
    </div>
  );
}

export default App;
