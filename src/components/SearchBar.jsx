import { useFormik } from "formik";
import { SearchBarSchema } from "../schema/schema";
import Context from "../context/Context";
import { useContext } from "react";

function SearchBar() {
  const { setVisible, fetchData, departureData, arrivalData } =
    useContext(Context);

  const onSubmit = (values, action) => {
    action.resetForm();
    // console.log(action);
    departureData(values.departure);
    arrivalData(values.arrival);
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        departure: "",
        arrival: "",
      },
      validationSchema: SearchBarSchema,
      onSubmit,
    });

  const handleClick = () => {
    setVisible(true);
  };
  const customHandleChange = (e) => {
    const { value } = e.target;
    handleChange(e);
    fetchData(value);
    // console.log(id, value);
  };
  // console.log(values);
  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-container">
          <div className="search-input">
            <div>
              <input
                type="text"
                placeholder="Kalkış Havaalanı"
                id="departure"
                value={values.departure}
                onClick={handleClick}
                onChange={customHandleChange}
                className={errors.departure ? "input-error" : ""}
              />
              {errors.departure && <p className="error">{errors.departure}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Varış Havaalanı"
                id="arrival"
                value={values.arrival}
                onClick={handleClick}
                onChange={customHandleChange}
                className={errors.arrival ? "input-error" : ""}
              />
              {errors.arrival && <p className="error">{errors.arrival}</p>}
            </div>
          </div>

          <button className="search-btn" disabled={isSubmitting} type="submit">
            Uçuş Ara
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
