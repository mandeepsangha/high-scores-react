import React from "react";

function ScoreTable(props) {
  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            {" "}
            Jam
            {/* {props.scores
              .map((el) => {
                return <td>{el.scores}</td>;
              })} */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScoreTable;
