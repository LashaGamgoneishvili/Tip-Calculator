import { useState, useEffect } from "react";

export default function Button({ percent, onPersentCalculator, value }) {
  function handleButton(e) {
    onPersentCalculator(e);
  }

  return (
    <button
      className={`card percent ${percent === value / 100 ? "active" : ""}`}
      value={value}
      onClick={(e) => handleButton(e)}
    >
      {value}%
    </button>
  );
}
