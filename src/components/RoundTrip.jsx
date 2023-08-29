import { useState } from "react";

function RoundTrip() {
  const currentDate = new Date().toISOString().split("T")[0];
  const [departureDate, setDepartureDate] = useState(currentDate);

  const handleDepartureDateChange = (e) => {
    const newDepartureDate = e.target.value;
    setDepartureDate(newDepartureDate);
  };
  console.log(departureDate);
  return (
    <div>
      <label htmlFor="">Gidiş Tarihi</label>
      <input
        min={currentDate}
        onChange={handleDepartureDateChange}
        type="date"
        id="departure"
      />
      <label htmlFor="">Dönüş Tarihi</label>
      <input min={departureDate} type="date" id="arrival" />
    </div>
  );
}

export default RoundTrip;
