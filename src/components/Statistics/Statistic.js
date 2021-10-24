import PropTypes from "prop-types";

function Statistics(props) {
  const { good, neutral, bad, countTotal, calculateFeedback } = props;
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotal()}</p>
      <p>Positive feedback: {calculateFeedback().toFixed(0)}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotal: PropTypes.func.isRequired,
  calculateFeedback: PropTypes.func.isRequired,
};

export default Statistics;
