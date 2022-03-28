import React from "react";

function HighScores(props) {
  let scoreArray = [];
  let nameArray = [];
  const obj = {};
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 5; j++) {
      if (props.scores[i].scores[j]) {
        let score = props.scores[i].scores[j].s;
        let nameOfPlayer = props.scores[i].scores[j].n;
        scoreArray.push(score);
        nameArray.push(nameOfPlayer);
      }
    }
  }

  nameArray.forEach((element, index) => {
    obj[element] = scoreArray[index];
  });

  let topFive = scoreArray.sort((a, b) => b - a).splice(0, 5);

  return (
    <div className="cards">
      HIGH SCORES: Worldwide
      <table className="styled-table">
        <tbody>
          {topFive.map((el) => {
            return (
              <tr>
                {Object.keys(obj)
                  .find((key) => obj[key] === el)
                  .toUpperCase()}
                <td>{el}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HighScores;
