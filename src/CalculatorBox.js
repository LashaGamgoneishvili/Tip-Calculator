import Result from "./Result.js";

export default function CalculatorBox({
  onTotal,
  onTip,
  onHandleReset,
  reset,
}) {
  return (
    <div className="calculator-box">
      <div className="box">
        <Result number={1} onTip={onTip} />
        <Result number={2} onTotal={onTotal} />
        <button
          className="reset"
          onClick={onHandleReset}
          style={{ backgroundColor: reset }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
