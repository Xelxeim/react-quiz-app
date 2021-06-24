import { useEffect, useState } from "react";
import AnswerItem from "../answer-item";

import './AnswerList.scss';

const AnswerList = ({ correctAnswer, incorrectAnswers, type, currentNumber, onChangeHandler }) => {
  const [userAnswers, setUserAnswers] = useState([]);
  const shuffle = (array) => {
    array.sort(() => Math.round(Math.random() * 100) - 50);
    return array;
  }

  const dropCheckboxes = () => {
    
    const checkboxes = document.getElementsByClassName("btn-element");
    for (let item of checkboxes) {
      item.checked = false;
    }
  }

  const allAnswers = [...incorrectAnswers, correctAnswer];
  useEffect(() => {
    shuffle(allAnswers);
    setUserAnswers(allAnswers);
    dropCheckboxes();
  }, [currentNumber])

  return (
    <div className="quiz__answer-list">
      {allAnswers.map((item, index) => <AnswerItem key={index} value={item} type={type} currentNumber={currentNumber} onChangeHandler={onChangeHandler} />)}
    </div>
  );
}

export default AnswerList;