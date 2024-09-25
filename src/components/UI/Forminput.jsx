import "./Forminput.css";
import { Input } from "./Input";
import React from "react";

export const FormInput = ({ inputType, labelText, id ,value,onChange}) => {
  return (
    <div className="wrapper-input">
      <label htmlFor={id}>{labelText}</label>
      <Input id={id} type={inputType} value={value}onChange={onChange}/>
    </div>
  );
};
