import React, { useState, useEffect } from "react";

export default function Demo13_NoEffect1() {
  const [price, setPrice] = useState(0);
  const [jpyRate, setJpyRate] = useState(0);
  
  //*NOTE: use Effect could re-render component
  // but usestate also re-render when state change
  // in this case: #1 will render 4 times, #2 render 2 times

  // #1
  //   const [jpy, setjpy] = useState(0);
  //   useEffect(() => {
  //     setjpy((price / jpyRate).toFixed(1));
  //   }, [price, jpyRate]);

  // #2
  const jpy = (price / jpyRate).toFixed(1);

  return (
    <>
      <div>Demo13_NoEffect1</div>
      Price:
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      JPY Rate:
      <input
        type="number"
        value={jpyRate}
        onChange={(e) => setJpyRate(e.target.value)}
      />
      <br />
      JPY: {jpy}
    </>
  );
}
