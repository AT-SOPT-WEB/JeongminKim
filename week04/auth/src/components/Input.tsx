import React from "react";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

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

const StyledInput = styled.input`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    width: 300px;
    margin: 10px auto;
    box-sizing: border-box;
`;
