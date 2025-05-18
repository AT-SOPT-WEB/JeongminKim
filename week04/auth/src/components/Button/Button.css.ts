import styled from "@emotion/styled";

interface StyledButtonProps {
    isValid?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme, isValid }) => (isValid ? theme.colors.valid : theme.colors.error)};
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    width: 300px;
    margin: 10px auto;

    &:hover {
        opacity: 0.9;
    }

    &:disabled {
        background-color: #ddd;
        color: #aaa;
        cursor: not-allowed;
    }
`;