import React from "react";

const Feedback = ({ FB, posFB }) => {
  return (
    <div>
      <ul>
        <li>Good: {FB.good}</li>
        <li>Neutral: {FB.neutral}</li>
        <li>Bad: {FB.bad}</li>
        <li>Positive: {posFB}</li>
      </ul>
    </div>
  );
};

export default Feedback;
