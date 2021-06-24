import './ConfirmBtn.scss';

const ConfirmBtn = ({ clickHandler }) => {

  return (
    <button onClick={clickHandler} className="quiz__next-btn">Confirm</button>
  );
}

export default ConfirmBtn;