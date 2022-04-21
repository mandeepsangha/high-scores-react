import React from "react";

function ToggleScore(props) {
  function logWhenClicked() {
    props.setToggleScoreOrder((current) => !current);
  }

  return <button onClick={logWhenClicked}>Ascending / Descending</button>;
}

export default ToggleScore;
