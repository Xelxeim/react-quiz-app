import Counter from "../counter";
import Question from "../question";
import AnswerList from "../answer-list";
import ConfirmBtn from "../confirm-btn";

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="quiz">
        <Counter />
        <Question />
        <AnswerList />
        <ConfirmBtn />
      </div>
    </div>
  );
}

export default App;
