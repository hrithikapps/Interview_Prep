import React from "react";
import { useState } from "react";
import "../App.css";
import { useRef } from "react";
import { useEffect } from "react";

const OtpPage = ({ otpLength = 6 }) => {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  useEffect(() => {
    ref.current[0].focus();
  }, []);

  const handleKeyDown = (e, index) => {
    console.log("e", e);
    const key = e.key;
    const newOtpFileds = [...otpFields];
    if (key == "Backspace") {
      newOtpFileds[index] = "";
      if (index - 1 >= 0) ref.current[index - 1].focus();
      setOtpFields(newOtpFileds);
      return;
    }
    if (isNaN(key)) return;

    newOtpFileds[index] = key;
    if (index + 1 < otpFields.length) ref.current[index + 1].focus();

    setOtpFields(newOtpFileds);
  };

  return (
    <div className="container">
      {otpFields.map((values, index) => {
        console.log("values", values);
        return (
          <input
            className="input-container"
            key={index}
            type="text"
            value={values}
            ref={(currentInput) => (ref.current[index] = currentInput)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OtpPage;
