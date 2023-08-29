import { useFormik } from "formik";
import { SearchBarSchema } from "../schema/schema";

function SearchBar() {
  const onSubmit = (values, action) => {
    action.resetForm();
    console.log(action);
    console.log(values);
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
  // console.log(values);
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <div className="search-input">
          <div>
            <input
              type="text"
              placeholder="Kalkış yeri"
              id="departure"
              value={values.departure}
              onChange={handleChange}
              className={errors.departure ? "input-error" : ""}
            />
            {errors.departure && <p className="error">{errors.departure}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Varış Yeri"
              id="arrival"
              value={values.arrival}
              onChange={handleChange}
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
  );
}

export default SearchBar;
