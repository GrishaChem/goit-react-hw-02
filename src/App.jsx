import React from "react";
import Desc from "./components/description/Desc";
import Options from "./components/options/Options";

const App = () => {
  // feedback = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  return (
    <>
      <Desc />
      <Options />
    </>
  );
};

export default App;
