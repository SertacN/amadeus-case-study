import { createContext, useState } from "react";

const Context = createContext();

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [visible, setVisible] = useState(true);
  const [result, setResult] = useState([]);
  const [depData, setDepData] = useState([]);
  const [arriData, setArriData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (value) => {
    await fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        const result = data.filter((item) => {
          return (
            value &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(value)
          );
        });
        // console.log(result);
        setResult(result);
      });
  };

  const departureData = async (value) => {
    setIsLoading(true);
    await fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const result = data.filter((item) => {
          return (
            value &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(value)
          );
        });
        if (result.length === 0) {
          alert("Lütfen doğru kalkış alanı yazdığınızdan emin olun.");
          return;
        }
        // console.log(result);
        setDepData(result);
      })
      .catch((err) => {
        alert("Bir hata oluştu:" + err);
      });
    setIsLoading(false);
  };

  const arrivalData = async (value) => {
    setIsLoading(true);
    await fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const result = data.filter((item) => {
          return (
            value &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(value)
          );
        });
        if (result.length === 0) {
          alert("Lütfen doğru varış alanı yazdığınızdan emin olun.");
          return;
        }
        // console.log(result);
        setArriData(result);
      })
      .catch((err) => {
        alert("Bir hata oluştu:" + err);
      });
    setIsLoading(false);
  };

  const sharedValue = {
    visible,
    setVisible,
    fetchData,
    result,
    departureData,
    depData,
    arrivalData,
    arriData,
    isLoading,
  };
  return <Context.Provider value={sharedValue}>{children}</Context.Provider>;
}

export default Context;
export { Provider };
