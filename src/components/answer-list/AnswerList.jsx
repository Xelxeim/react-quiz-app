import AnswerItem from "../answer-item";

import './AnswerList.scss';

const AnswerList = ({ correctAnswer, incorrectAnswers, type, currentNumber, addAnswer }) => {
  const shuffle = (array) => {
    array.sort(() => Math.round(Math.random() * 100) - 50);
  }
  const allAnswers = [...incorrectAnswers];
  allAnswers.push(correctAnswer);
  shuffle(allAnswers);

  return (
    <div className="quiz__answer-list">
      {allAnswers.map((item, index) => <AnswerItem key={index} value={item} type={type} currentNumber={currentNumber} addAnswer={addAnswer} />)}
    </div>
  );
}

export default AnswerList;