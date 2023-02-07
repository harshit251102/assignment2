import logo from "./logo.svg";
import "./App.css";
import DonutChart from "react-donut-chart";
import LoadingSpinner from "./LoadingSpinner";
import { useEffect, useState } from "react";
import LeftSidebar from "./LeftSideBar";

function App() {
  const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [donutArr, setDonutArr] = useState([]);

  let arr = [];

  const handleSubmit = (event) => {
    setDisplay(true);
    setLoading(true);
    event.preventDefault();
    const tp = event.target.tp.value;
    const cm = event.target.cm.value;
    const re = event.target.re.value;
    const grossEarnings = (tp / 100) * cm;
    const referralEarnings = (((grossEarnings / 100) * cm) / 100) * re;
    const miscFees = (grossEarnings - referralEarnings) / 10;
    const tradeShare = ((grossEarnings - referralEarnings - miscFees) / 5) * 2;
    const tradeEarnings = tradeShare + miscFees;
    const dalalEarnings = grossEarnings - referralEarnings - tradeEarnings;
    console.log("Referral Earnings : " + referralEarnings);
    console.log("Dalal Earnings : " + dalalEarnings);
    console.log("Misc. Fees : " + miscFees);
    console.log("Trade Share : " + tradeShare);
    const total = referralEarnings + dalalEarnings + miscFees + tradeShare;
    const referralEarningsPercentage = (referralEarnings / total) * 100;
    const dalalEarningsPercentage = (dalalEarnings / total) * 100;
    const miscFeesPercentage = (miscFees / total) * 100;
    const tradeSharePercentage = (tradeShare / total) * 100;
    arr.unshift({
      label: "Referral Earnings",
      value: referralEarningsPercentage,
    });
    arr.unshift({ label: "Dalal Earnings", value: dalalEarningsPercentage });
    arr.unshift({ label: "Misc. Fees", value: miscFeesPercentage });
    arr.unshift({ label: "Trade Share", value: tradeSharePercentage });
    console.log(arr);
    setDonutArr(arr);
    setLoading(false);
  };

  return (
    <>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",margin:"10px"}}>
      <div className="container-fluid">
                <LeftSidebar handleSubmit={handleSubmit} />
      </div>
      <div style={{padding : "4px"}}>
        {loading ? <LoadingSpinner /> : <DonutChart data={donutArr} />}
      </div>
      </div>
    </>
  );
}

export default App;
