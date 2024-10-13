/* import React from "react"; */

/* function NumImp({ dataIn, label, handleData, id }) {
  const handleChange = (e) => {
    handleData(e.target.value, id);
  };

  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="number"
        className="form-control"
        value={dataIn}
        id={id}
        onChange={handleChange}
        min={1}
        max={4}
      />
    </>
  );
}

export default NumImp;  */


/* import React from "react";

function NumImp({ dataIn, label, handleData, id }) {
  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1 && value <= 4) {
      handleData(value, id);
    } else {
      alert("Prosím, zadejte číslo mezi 1 a 4.");
    }
  };

  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="number"
        className="form-control"
        value={dataIn}
        id={id}
        onChange={handleChange}
        min={1}
        max={4}
      />
    </>
  );
}

export default NumImp; */

import React from "react";

function NumImp({ dataIn, label, handleData, id }) {
  const handleChange = (e) => {
    const value = e.target.value;

    // Check if value is a number and within range
    if (/^\d*$/.test(value) && (value === "" || (parseInt(value, 10) >= 1 && parseInt(value, 10) <= 4))) {
      handleData(value === "" ? "" : parseInt(value, 10), id);
    } else {
      alert("Prosím, zadejte číslo mezi 1 a 4.");
    }
  };

  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        value={dataIn}
        id={id}
        onChange={handleChange}
        inputMode="numeric" // Suggest numeric keypad on mobile
        pattern="[0-9]*"    // Only allow numeric input
      />
    </>
  );
}

export default NumImp;