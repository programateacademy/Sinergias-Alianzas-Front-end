// dependencies
import React, { useState } from "react";

// icons
import { FaEye, FaEyeSlash } from "react-icons/fa";

// styles
import { Input } from "reactstrap";
import "./PasswordInput.css";

const PasswordInput = ({ placeholder, value, onChange, name, onPaste }) => {
  /* 
  - =================================
  -       COMPONENT STATES
  - =================================
  */

  //* Password status: Visible or hidden
  const [showPassword, setShowPassword] = useState(false);

  /* 
  - =================================
  -    COMPONENT FUNCTIONS
  - =================================
  */

  //* Function to show or hide the password in the input
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="input-password">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onPaste={onPaste}
          required
        />

        <div className="icon-password" onClick={togglePassword}>
          {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
        </div>
      </div>
    </>
  );
};

export default PasswordInput;
