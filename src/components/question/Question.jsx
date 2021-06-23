import './Question.scss';

const Question = ({ question, difficulty, type }) => {
  return (
    <>
      <div className="quiz__question">
        <p>{question}</p>
      </div>
      <div className="quiz__description">
        <span className="quiz__description-item">Difficulty: {difficulty}</span>
        <span className="quiz__description-item">Number of answers: {type === "boolean" ? "One answer" : "One or few answers"}</span>
      </div>
    </>
  );
}

export default Question;