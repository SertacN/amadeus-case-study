import { useContext } from "react";
import Context from "../context/Context";

function FlightList() {
  const { depData, arriData } = useContext(Context);
  // console.log(depData, arriData);
  return (
    <div className="fligth-list-container">
      <div className="flight-list departure">
        {depData.map((item, i) => {
          return (
            <div key={i} className="flight-list-item">
              <div className="fx-cl-center">
                <h4 className="main-dark-color">Havaalanı</h4>
                <p className="font-large">{item.name}</p>
                <p>{item.airPort}</p>
              </div>
              <div className="fx-cl-center">
                <h4 className="main-dark-color">Kalkış</h4>
                <p className="font-large">{item.hour.departure}</p>
                <p>{item.flightLength}</p>
              </div>
              <div className="fx-cl-center">
                <h4 className="main-dark-color">Telefon</h4>
                <p className="font-large">{item.phone}</p>
                <a href={item.website} target="_blank" rel="noreferrer">
                  Website
                </a>
              </div>
              -
            </div>
          );
        })}
      </div>
      <div className="flight-list arrival">
        {arriData.map((item, i) => {
          return (
            <div key={i} className="flight-list-item">
              <div className="fx-cl-center">
                <h4 className="main-dark-color">Havaalanı</h4>
                <p className="font-large">{item.name}</p>
                <p>{item.airPort}</p>
              </div>
              <div className="fx-cl-center">
                <h4 className="main-dark-color">Varış</h4>
                <p className="font-large">{item.hour.arrival}</p>
                <p>{item.flightLength}</p>
              </div>
              <div className="fx-cl-center">
                <h4 className="main-dark-color">Telefon</h4>
                <p className="font-large">{item.phone}</p>
                <a href={item.website} target="_blank" rel="noreferrer">
                  Website
                </a>
              </div>
              <div className="price">{item.price} TL</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FlightList;
