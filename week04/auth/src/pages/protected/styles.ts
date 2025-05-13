/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 10px;
`;

export const Link = styled(RouterLink)`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.background};
    margin-top: 10px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.text};
    }
`;

export const Header = styled.header`
    display: flex;
    gap: 20px;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: space-between;
`;

export const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;

export const List = styled.div`
    margin-top: 20px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 400px;
    text-align: center;
    height: 200px;
    overflow-y: auto;
`;