import './Counter.scss';

const Counter = ({ currentNumber, amount }) => {
  return (
    <div className="quiz__counter">
      <p>Question {currentNumber} of {amount}</p>
    </div>
  );
}

export default Counter;