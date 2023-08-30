import { useState } from "react";

function CheckBoxInput() {
  const currentDate = new Date().toISOString().split("T")[0];
  const [selectedCheckbox, setSelectedCheckbox] = useState("oneWay");
  const [departureDate, setDepartureDate] = useState(currentDate);
  const [isChecked, setIsChecked] = useState(true);
  // console.log(selectedCheckbox);
  const handleCheckboxChange = (id) => {
    setSelectedCheckbox(id);
    if (id === "oneWay") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const handleDepartureDateChange = (e) => {
    const newDepartureDate = e.target.value;
    setDepartureDate(newDepartureDate);
  };
  // console.log(departureDate);
  return (
    <div className="checkBox-container">
      <div className="checkBox-input">
        <div>
          <label htmlFor="oneWay">Tek Yön</label>
          <input
            checked={selectedCheckbox === "oneWay"}
            type="radio"
            id="oneWay"
            onChange={() => handleCheckboxChange("oneWay")}
          />
        </div>
        <div>
          <label htmlFor="roundTrip">Gidiş Dönüş</label>
          <input
            checked={selectedCheckbox === "roundTrip"}
            type="radio"
            id="roundTrip"
            onChange={() => handleCheckboxChange("roundTrip")}
          />
        </div>
      </div>
      <div className="date-picker">
        <label className="departure-label" htmlFor="departure">
          Kalkış Tarihi
        </label>
        <input
          min={currentDate}
          onChange={handleDepartureDateChange}
          type="date"
          id="departure"
        />
        <label
          className={`return-label ${isChecked ? "gray" : ""}`}
          htmlFor="arrival"
        >
          Dönüş Tarihi
        </label>
        <input
          min={departureDate}
          disabled={isChecked}
          type="date"
          id="arrival"
        />
      </div>
    </div>
  );
}

export default CheckBoxInput;
