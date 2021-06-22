import './AnswerItem.scss';

const AnswerItem = ({ value }) => {
  return (
    <div className="quiz__answer-item">
      {value}
    </div>  
  );
}

export default AnswerItem;