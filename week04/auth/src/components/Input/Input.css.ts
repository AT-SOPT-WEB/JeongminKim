import styled from "@emotion/styled";

export const StyledInput = styled.input`
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