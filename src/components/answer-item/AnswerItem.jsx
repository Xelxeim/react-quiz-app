import './AnswerItem.scss';

const AnswerItem = ({ value, type, currentNumber }) => {
  return (
    <div className="quiz__answer-item">
      {type === "boolean" ? <input type="radio" name={currentNumber} id={value} className="btn-element" /> : <input type="checkbox" name={currentNumber} id={value} className="btn-element" />}
      <label htmlFor={value} className="">{value}</label>
    </div>  
  );
}

export default AnswerItem;