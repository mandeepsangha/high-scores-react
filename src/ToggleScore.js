import React, { useState } from "react";
import ScoreCard from "./ScoreCard";
import ScoreCardAsc from "./ScoreCardAsc";

function ToggleScore(props) {
  // const [toggleScoreOrder, setToggleScoreOrder] = useState(true);

  function logWhenClicked() {
    props.setToggleScoreOrder((current) => !current);
  }

  return <button onClick={logWhenClicked}>Ascending / Descending</button>;
}

export default ToggleScore;
