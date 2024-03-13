export default function Result({ number, onTotal, onTip }) {
  return (
    <div className={`part part-${number}`}>
      <div className="part-div">
        <p>{number === 1 ? "Tip amount" : "Total"}</p>
        <div className="money">
          {number === 1 ? (
            <p className="dollar small">
              {onTip ? `${onTip.toFixed(2)}` : "$0.00"}
            </p>
          ) : (
            <p className="dollar">
              {onTotal ? `${onTotal.toFixed(2)}` : "$0.00"}
            </p>
          )}
        </div>
      </div>
      <span>/ person</span>
    </div>
  );
}
