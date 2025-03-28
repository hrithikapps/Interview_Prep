import React from "react";
import { useForm } from "../utils/useForm";

const LandingPage = () => {
  const { values, handleSubmit, setFormData, resetFormData } = useForm({
    email: "",
    password: "",
  });

  const onHandleSubmit = (formData) => {
    console.log("formData", formData);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, onHandleSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={setFormData}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={values.password}
          onChange={setFormData}
        />
        <button type="submit">Submit</button>
        <button onClick={(e) => resetFormData(e)}>Reset</button>
      </form>
    </div>
  );
};

export default LandingPage;
