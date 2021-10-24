import { useState } from "react";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistic";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedbackBtnClick = (type) => {
    switch (type) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        console.error("onFeedbackBtnClick type:" + type);
        break;
    }
  };

  const countTotal = () => good + neutral + bad;

  const calculateFeedback = () => (good ? (good * 100) / countTotal() : 0);

  const options = ["good", "neutral", "bad"];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onFeedbackBtnClick={onFeedbackBtnClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotal() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotal={countTotal}
            calculateFeedback={calculateFeedback}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

export default App;
