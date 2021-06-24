import "./Results.scss";

const Results = ({ results }) => {
  let correctAnswers = 0, 
    questionNumbers = [];

  const renderedList = () => {
    questionNumbers = Object.keys(results);

    const content = questionNumbers.map(item => {
      const question = results[item];
      if(question.result) correctAnswers+=1;
      const sign = (!question.result) ? "Wrong!" : "Correct!"; 
      return <li key={item} className="quiz__list-item">{+item + 1} - {sign}</li>
    })
    return content;
  }

  const difficultyCounter = (difficult, paramForReturn) => {
    let totalCount = 0;
    let correctCount = 0;
    questionNumbers = Object.keys(results);
    questionNumbers.forEach(item => {
      const question = results[item];
      if(question.difficulty === difficult) {
        totalCount+=1;
        if(question.result) correctCount+=1
      }
    })
    if (paramForReturn === "total") return totalCount;
    return correctCount;
  }

  return (
    <div className="quiz__results">
      <h1>Your results:</h1>
      <ul className="quiz__list">
        {renderedList()}
      </ul>
      <h2>In total: {correctAnswers} / {questionNumbers.length}</h2>
      <h3>Among them:</h3>
      <p>Easy questions - {difficultyCounter("easy", "correct")} / {difficultyCounter("easy", "total")}</p>
      <p>Medium questions - {difficultyCounter("medium", "correct")} / {difficultyCounter("medium", "total")}</p>
      <p>Hard questions - {difficultyCounter("hard", "correct")} / {difficultyCounter("hard", "total")}</p>
    </div>
  )
}

export default Results;