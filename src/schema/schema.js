import * as yup from "yup";

export const SearchBarSchema = yup.object().shape({
  departure: yup
    .string()
    .required("Lütfen Kalkış noktası giriniz")
    .min(2, "Lütfen Kalkış noktası giriniz"),
  arrival: yup
    .string()
    .required("Lütfen Varış noktası giriniz")
    .min(2, "Lütfen Varış noktası giriniz"),
});
