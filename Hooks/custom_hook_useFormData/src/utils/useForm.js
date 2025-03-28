import { useState } from "react";

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = (e, callback) => {
    e.preventDefault();
    callback(values);
  };

  const setFormData = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const resetFormData = (e) => {
    e.preventDefault();
    setValues(initialValues);
  };

  return { values, handleSubmit, setFormData, resetFormData };
};
