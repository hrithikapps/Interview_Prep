import { FormEvent, FormEventHandler } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import "./App.css";
import { UserForm } from "./Userform";
import { useMultiStepForm } from "./utils/useMultistepForm";

function App() {
  const { step, steps, back, next, currentStepIndex, isFirstStep, isLastStep } =
    useMultiStepForm([<UserForm />, <AddressForm />, <AccountForm />]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        <div>{step}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
            gap: "0.5rem",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
