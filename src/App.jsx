import { useContext } from "react";
import "./App.css";
import CheckBoxInput from "./components/CheckBoxInput";
import FlightList from "./components/FlightList";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import Context from "./context/Context";

function App() {
  const { isLoading } = useContext(Context);
  return (
    <div className="container">
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <div className="main-container">
            <CheckBoxInput />
            <SearchBar />
            <SearchResult />
          </div>
          <FlightList />
        </>
      )}
    </div>
  );
}

export default App;
