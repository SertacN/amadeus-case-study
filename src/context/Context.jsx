import { createContext, useState } from "react";
import axios from "axios";

const Context = createContext();

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [visible, setVisible] = useState(true);
  const [result, setResult] = useState([]);
  const [depData, setDepData] = useState([]);
  const [arriData, setArriData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (value) => {
    const response = await axios.get("http://localhost:3000/user");
    // console.log(response);
    const result = response.data.filter((item) => {
      return (
        value && item && item.name && item.name.toLowerCase().includes(value)
      );
    });
    setResult(result);
  };

  const departureData = async (value) => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3000/user");
      const result = response.data.filter((item) => {
        return (
          value && item && item.name && item.name.toLowerCase().includes(value)
        );
      });
      if (result.length === 0) {
        alert("Lütfen doğru kalkış alanı yazdığınızdan emin olun.");
      }
      setDepData(result);
      setIsLoading(false);
    } catch (error) {
      alert("DepartureData - Bir hata oluştu: " + error);
      setIsLoading(false);
    }
  };

  const arrivalData = async (value) => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3000/user");
      const result = response.data.filter((item) => {
        return (
          value && item && item.name && item.name.toLowerCase().includes(value)
        );
      });
      if (result.length === 0) {
        alert("Lütfen doğru varış alanı yazdığınızdan emin olun.");
      }
      setArriData(result);
      setIsLoading(false);
    } catch (error) {
      alert("ArrivalData - Bir hata oluştu:" + error);
      setIsLoading(false);
    }
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
