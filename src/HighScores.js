import React from "react";

function HighScores(props) {
  let newArray = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 5; j++) {
      if (props.scores[i].scores[j]) {
        let score = props.scores[i].scores[j].s;
        newArray.push(score);
      }
    }
  }

  let topFive = newArray.sort((a, b) => b - a).splice(0, 5);

  return (
    <div>
      {/* {console.log(props.scores[0].scores[0].s)} */}
      {console.log(topFive)}
      High Scores Worldwide
      <table>
        <tbody>
          {topFive.map((el) => {
            return (
              <tr>
                <td>{el}</td>
              </tr>
            );
          })}

          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}

export default HighScores;
