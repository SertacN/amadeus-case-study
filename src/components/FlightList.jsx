import { useContext } from "react";
import Context from "../context/Context";

function FlightList() {
  const { depData, arriData } = useContext(Context);
  // console.log(depData, arriData);
  return (
    <div>
      <div>
        <h1>Kalkış</h1>
        {depData.map((item, i) => {
          return (
            <div key={i}>
              <h3>{item.name}</h3>
              <p>{item.email}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Varış</h1>
        {arriData.map((item, i) => {
          return (
            <div key={i}>
              <h3>{item.name}</h3>
              <p>{item.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FlightList;
