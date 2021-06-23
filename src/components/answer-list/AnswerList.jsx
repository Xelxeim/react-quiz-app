import AnswerItem from "../answer-item";

import './AnswerList.scss';

const AnswerList = ({correctAnswer, incorrectAnswers}) => {
  const shuffle = (array) => {
    array.sort(() => Math.round(Math.random() * 100) - 50);
  }
  const allAnswers = [...incorrectAnswers];
  allAnswers.push(correctAnswer);
  shuffle(allAnswers);

  return (
    <div className="quiz__answer-list">
      {allAnswers.map(item => <AnswerItem key={item} value = {item}/>)}
    </div>
  );
}

export default AnswerList;