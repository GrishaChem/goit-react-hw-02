import React, { useEffect, useState } from "react";
import Desc from "./components/description/desc.jsx";
import Options from "./components/options/options.jsx";
import Feedback from "./components/feedback/feedback.jsx";
import Not from "./components/not/not.jsx";

const App = () => {
  const [feedback, setFeedBack] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const resetFeedback = () => {
    setFeedBack({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.bad + feedback.neutral;
  const posFB = Math.round((feedback.good / totalFeedback) * 100);
  const updateFeedback = (feedbackType) => {
    setFeedBack((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Desc />
      <Options
        resetFeedback={resetFeedback}
        FB={totalFeedback}
        updateFeedback={updateFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback totalFeedback={totalFeedback} posFB={posFB} FB={feedback} />
      ) : (
        <Not />
      )}
    </>
  );
};

export default App;
