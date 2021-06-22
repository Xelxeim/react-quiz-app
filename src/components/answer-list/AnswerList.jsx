import AnswerItem from "../answer-item";

import './AnswerList.scss';

const AnswerList = () => {
  return (
    <div className="quiz__answer-list">
      <AnswerItem value = "Yes"/>
      <AnswerItem value = "No"/>
      <AnswerItem value = "Maybe"/>
      <AnswerItem value = "All of this"/>
    </div>
  );
}

export default AnswerList;