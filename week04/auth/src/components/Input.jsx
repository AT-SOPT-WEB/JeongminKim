/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledInput = styled.input`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: ${({ theme }) => theme.fontSizes.md};
    outline: none;
    width: 300px;
    margin: 10px auto;
    transition: border-color 0.2s;
    box-sizing: border-box;
`;

function Input({ type = "text", value, onChange, placeholder, ...rest }) {
    return <StyledInput type={type} value={value} onChange={onChange} placeholder={placeholder} {...rest} />;
}

export default Input;
