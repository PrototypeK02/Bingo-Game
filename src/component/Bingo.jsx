import React, { useState } from "react";
import "./bingo.css";
import bingoCard from "../actions/bingo";
const Bingo = () => {
  const [bingo, setBingo] = useState([]);
  return (
    <div className={bingo.length ? "layout" : "layoutOff"}>
      <div className="createBtn">
        <button onClick={() => setBingo(bingoCard())}>
          CREATE BINGO CARD !
        </button>
      </div>
      <div className="card">
        {bingo.length &&
          bingo.map((e, index) => (
            <div key={index} className="col">
              {e.map((x, index) => (
                <span key={index}>{x}</span>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Bingo;
