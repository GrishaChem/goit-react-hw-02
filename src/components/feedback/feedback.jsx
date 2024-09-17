import React from "react";
import s from "../feedback/feedBack.module.css";
const Feedback = ({ FB, posFB, totalFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good: {FB.good}</li>
        <li>Neutral: {FB.neutral}</li>
        <li>Bad: {FB.bad}</li>
        <li>Positive: {posFB}</li>
        <li>Total: {totalFeedback}</li>
      </ul>
    </div>
  );
};

export default Feedback;
