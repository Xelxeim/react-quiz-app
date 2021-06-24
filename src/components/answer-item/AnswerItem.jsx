import './AnswerItem.scss';

const AnswerItem = ({ value, type, currentNumber, onChangeHandler}) => {
  return (
    <div className="quiz__answer-item">
      {type === "boolean" ? 
        <input 
          type="radio" 
          onChange={(e) => onChangeHandler(e, type)} 
          name={currentNumber} 
          id={value} 
          className="btn-element"
        /> : 
        <input 
          type="checkbox" 
          onChange={(e) => onChangeHandler(e, type)} 
          name={currentNumber} 
          id={value} 
          className="btn-element"
        />}
      <label htmlFor={value} className="">{value}</label>
    </div>  
  );
}

export default AnswerItem;