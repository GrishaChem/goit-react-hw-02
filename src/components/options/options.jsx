import React from "react";

const options = ({ FB, updateFeedback, resetFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {FB > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default options;
