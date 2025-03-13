import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((prevStepIndex) => {
      if (prevStepIndex >= steps.length - 1) return prevStepIndex;
      return prevStepIndex + 1;
    });
  }

  function back() {
    setCurrentStepIndex((prevStepIndex) => {
      if (prevStepIndex <= 0) return prevStepIndex;
      return prevStepIndex - 1;
    });
  }

  function goto(index: Number) {
    setCurrentStepIndex(currentStepIndex);
  }

  return {
    currentStepIndex,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    step: steps[currentStepIndex],
    goto,
    back,
    next,
  };
}
