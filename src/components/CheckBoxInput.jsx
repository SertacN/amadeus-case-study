import PropTypes from "prop-types";

function CheckBoxInput({ selectedCheckbox, setSelectedCheckbox }) {
  CheckBoxInput.propTypes = {
    selectedCheckbox: PropTypes.string,
    setSelectedCheckbox: PropTypes.func,
  };
  // console.log(selectedCheckbox);
  const handleCheckboxChange = (id) => {
    setSelectedCheckbox(id);
  };

  return (
    <div className="checkBox-container">
      <div className="oneWay-container">
        <label htmlFor="oneWay">Tek Yön</label>
        <input
          checked={selectedCheckbox === "oneWay"}
          type="radio"
          id="oneWay"
          onChange={() => handleCheckboxChange("oneWay")}
        />
      </div>
      <div className="roundTrip-container">
        <label htmlFor="roundTrip">Gidiş Dönüş</label>
        <input
          checked={selectedCheckbox === "roundTrip"}
          type="radio"
          id="roundTrip"
          onChange={() => handleCheckboxChange("roundTrip")}
        />
      </div>
    </div>
  );
}

export default CheckBoxInput;
