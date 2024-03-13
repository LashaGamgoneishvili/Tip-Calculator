export default function Button({ percent, onPersentCalculator, currValue }) {
  function handleButton(e) {
    onPersentCalculator(e);
  }

  return (
    <button
      className={`card percent ${percent === currValue / 100 ? "active" : ""}`}
      value={currValue}
      onClick={(e) => handleButton(e)}
    >
      {currValue}%
    </button>
  );
}
