import './Question.scss';

const Question = () => {
  return (
    <>
      <div className="quiz__question">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi praesentium officiis voluptatibus ipsa consectetur unde eveniet totam sint est, asperiores vel cumque corrupti non odio minus! Explicabo cum esse fuga?</p>
      </div>
      <div className="quiz__description">
        <span className="quiz__description-item">Difficulty: Easy</span>
        <span className="quiz__description-item">Number of answers: One or few answers</span>
      </div>
    </>
  );
}

export default Question;