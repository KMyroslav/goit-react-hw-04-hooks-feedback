import PropTypes from "prop-types";

function FeedbackOptions({ options, onFeedbackBtnClick }) {
  return (
    <div>
      {options.map((el) => {
        return (
          <button key={el} type="button" onClick={onFeedbackBtnClick(el)}>
            {el}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedbackBtnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
