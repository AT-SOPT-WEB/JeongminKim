// Header.jsx
import styled from "@emotion/styled";

export default function Header({ activeTab, setActiveTab }) {
    return (
        <StyledHeader>
            <Title>숫자 야구 || 깃허브 검색</Title>
            <BtnGroup>
                <Btn onClick={() => setActiveTab("github")} active={activeTab === "github"}>
                    깃허브 검색
                </Btn>
                <Btn onClick={() => setActiveTab("baseball")} active={activeTab === "baseball"}>
                    숫자 야구
                </Btn>
            </BtnGroup>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
    color: white;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin: 0;
    padding-bottom: ${({ theme }) => theme.spacing.md};
`;
const Btn = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    border: none;
    border-radius: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ active, theme }) => (active ? theme.colors.secondary : theme.colors.background)};
    padding: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: bold;
    cursor: pointer;
    width: 100%;
`;
const BtnGroup = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: ${({ theme }) => theme.spacing.md};
`;
