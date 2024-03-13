import { useState } from "react";
import { useEffect } from "react";
import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";
import Background from "./Background.js";
import Button from "./Button.js";
import CalculatorBox from "./CalculatorBox.js";

const arr = [5, 10, 15, 20, 25];

export default function App() {
  return (
    <>
      <Background />
      <TipCalculator />
    </>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState();
  const [people, setPeople] = useState();
  const [percent, setPercent] = useState(0.1);
  const [inputPercent, setInputPercent] = useState();
  const [tip, setTip] = useState();
  const [total, setTotal] = useState();
  const [reset, setReset] = useState();

  useEffect(() => {
    function tipCalculator() {
      let billValue = bill * (percent || inputPercent);
      setTip(billValue);
    }

    function totalTipCalculator() {
      let totalBillValue = (bill + bill * (percent || inputPercent)) / people;
      setTotal(totalBillValue);
    }
    tipCalculator();
    totalTipCalculator();
  }, [bill, people, percent, inputPercent]);

  function handlBillValue(e) {
    setBill(Number(e.target.value));
    setReset((curr) => (curr = "#9fe8df"));
  }

  function handlePeopleNumber(e) {
    setPeople(Number(e.target.value));
    setReset((curr) => (curr = "#9fe8df"));
  }

  function persentCalculator(e) {
    setPercent((Number(e.target.value) || setInputPercent) / 100);
  }

  function handleReset() {
    setBill((curr) => (curr = ""));
    setPeople((curr) => (curr = ""));
    setPercent((curr) => (curr = 0.1));
    setTip((curr) => (curr = 0));
    setTotal((curr) => (curr = 0));
    setInputPercent((curr) => (curr = ""));
    setReset((curr) => (curr = "#0d686d"));
  }

  return (
    <div className="conteiner">
      <div className="main">
        <h3>Bill</h3>
        <div className="inputbox input-money">
          <input
            type="number"
            placeholder="0"
            defaultValue=""
            value={bill}
            onChange={(e) => handlBillValue(e)}
          ></input>
          <img className="icon" src={dollar} alt="dollar"></img>
        </div>
        <h4>Select Tip %</h4>
        <div className="section" id="myDiv">
          {arr.map((curr, i) => (
            <Button
              value={curr}
              key={i}
              onPersentCalculator={persentCalculator}
              onClick={persentCalculator}
              percent={percent}
            />
          ))}
          <input
            value={inputPercent}
            type="number"
            placeholder="custom"
            defaultValue=""
            className="custom-button percent"
            onChange={(e) => {
              setPercent((curr) => (curr = 0));
              setInputPercent(e.target.value);
            }}
          ></input>
        </div>
        <h5> Number of People</h5>
        <div className="inputbox">
          <input
            value={people}
            type="number"
            placeholder="0"
            defaultValue=""
            className="people"
            onChange={(e) => handlePeopleNumber(e)}
          ></input>
          <img className="icon" src={person} alt="person" />
        </div>
      </div>
      <CalculatorBox
        onTotal={total}
        reset={reset}
        onTip={tip}
        onHandleReset={handleReset}
      />
    </div>
  );
}
