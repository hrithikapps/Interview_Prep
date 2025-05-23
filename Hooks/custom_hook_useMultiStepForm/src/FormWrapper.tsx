import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode; //Special type in ract that allows us to accept any type of jsx
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto,400px)",
        }}
      >
        {children}
      </div>
    </>
  );
}
