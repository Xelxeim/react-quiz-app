import { useEffect, useState } from "react";
import AnswerItem from "../answer-item";

import functions from "../../services/functions";

import './AnswerList.scss';

const AnswerList = ({ correctAnswer, incorrectAnswers, type, currentNumber, onChangeHandler }) => {
  const [userAnswers, setUserAnswers] = useState([]);
  const allAnswers = [...incorrectAnswers, correctAnswer];

  useEffect(() => {
    functions.shuffle(allAnswers);
    setUserAnswers(allAnswers);
    functions.dropCheckboxes("btn-element");
  }, [currentNumber])

  return (
    <div className="quiz__answer-list">
      {allAnswers.map((item, index) => <AnswerItem key={index} value={item} type={type} currentNumber={currentNumber} onChangeHandler={onChangeHandler} />)}
    </div>
  );
}

export default AnswerList;