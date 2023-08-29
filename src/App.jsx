import { useState } from "react";
import "./App.css";
import CheckBoxInput from "./components/CheckBoxInput";
import OneWay from "./components/OneWay";
import RoundTrip from "./components/RoundTrip";
import DepartureInput from "./components/DepartureInput";
import ArrivalInput from "./components/ArrivalInput";

function App() {
  const [selectedCheckbox, setSelectedCheckbox] = useState("oneWay");

  return (
    <div className="container">
      <div className="main-container">
        <CheckBoxInput
          selectedCheckbox={selectedCheckbox}
          setSelectedCheckbox={setSelectedCheckbox}
        />
        <div className="search-container">
          <DepartureInput />
          <ArrivalInput />
        </div>
        <div>
          {selectedCheckbox === "oneWay" ? (
            <>
              <OneWay />
            </>
          ) : selectedCheckbox === "roundTrip" ? (
            <>
              <RoundTrip />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
