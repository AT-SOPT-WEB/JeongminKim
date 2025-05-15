import React from "react";
import {StyledButton} from "./Button.css";

type ButtonProps = {
    isValid?: boolean;
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, isValid = true, ...rest }: ButtonProps) {
    return (
        <StyledButton isValid={isValid} {...rest}>
            {children}
        </StyledButton>
    );
}


export default Button;
