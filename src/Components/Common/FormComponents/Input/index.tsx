import React, { useState } from "react";

type InputProps = {
  validation?: (value: string) => boolean;
  name: string;
  initValue?: string;
};
const Input: React.FC<InputProps> = ({ name, initValue = "", validation }) => {
  const [value, setValue] = useState(initValue);
  const [error, setError] = useState("");
  return (
    <div>
      <input
        onBlur={(evt) => {
          if (validation?.(evt.target.value)) {
            setError("Ошибка");
          } else {
            setError("");
          }
        }}
        value={value}
        name={name}
        onChange={(event) => setValue(event.target.value)}
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;
