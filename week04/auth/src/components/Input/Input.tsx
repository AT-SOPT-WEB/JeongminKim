import React from "react";
import {StyledInput} from "./Input.css";


interface InputProps {
    type?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    [key: string]: any;
}

const Input: React.FC<InputProps> = ({ type = "text", value, onChange, placeholder, ...rest }) => {
    return <StyledInput type={type} value={value} onChange={onChange} placeholder={placeholder} {...rest} />;
};

export default Input;

