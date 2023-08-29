import { useState } from "react";
import "./App.css";
import CheckBoxInput from "./components/CheckBoxInput";
import OneWay from "./components/OneWay";
import RoundTrip from "./components/RoundTrip";
import SearchBar from "./components/SearchBar";

function App() {
  const [selectedCheckbox, setSelectedCheckbox] = useState("oneWay");

  return (
    <div className="container">
      <div className="main-container">
        <CheckBoxInput
          selectedCheckbox={selectedCheckbox}
          setSelectedCheckbox={setSelectedCheckbox}
        />
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
        <div className="search-container">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;
