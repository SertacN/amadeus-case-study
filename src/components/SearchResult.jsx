import { useContext } from "react";
import Context from "../context/Context";

function SearchResult() {
  const { setVisible, visible, result } = useContext(Context);
  const handleClick = () => {
    setVisible(false);
  };
  //   console.log(visible);
  return (
    <div
      className={`result-container ${visible === false && "displayed-none"}`}
    >
      {result.map((result, i) => {
        return (
          <div className="result" key={i}>
            {visible ? (
              <>
                <button className="result-item" onClick={handleClick}>
                  {result.name}
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;
