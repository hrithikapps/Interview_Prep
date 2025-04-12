import React, { useState } from "react";
import { initialFormData } from "../utils/constants";

const InputForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const isValidForm = () => {
    const copyFormData = { ...formData };
    Object.keys(copyFormData).forEach((key) => {
      const obj = copyFormData[key];
      obj.isError = obj.value ? false : true;
      if (
        key === "confirmPassword" &&
        copyFormData["password"].value !== copyFormData["confirmPassword"]
      )
        setIsPasswordValid(!isPasswordValid);
    });

    setFormData(copyFormData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    isValidForm();
  };

  const handleInputChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    const copyformData = { ...formData };
    copyformData[key].value = value;
    setFormData(copyformData);
    isValidForm();
  };
  console.log("formdata", formData);
  return (
    <div className="container">
      <form className="form-container">
        {Object.keys(formData).map((key) => {
          const { id, label, type, placeholder, value, isError, errorMessage } =
            formData[key];

          return (
            <div key={id} className="form-item">
              <label>{label}</label>
              <input
                id={id}
                onChange={handleInputChange}
                type={type}
                value={value}
                placeholder={placeholder}
                className={isError ? "form-error" : ""}
              />
              {isError && <span className="error">{errorMessage}</span>}

              {key === "confirmPassword" && !isPasswordValid && (
                <span className="error">Password does not match </span>
              )}
            </div>
          );
        })}
        <div className="form-item">
          <button onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
