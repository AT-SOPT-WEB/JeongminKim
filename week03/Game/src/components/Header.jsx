// Header.jsx
import styled from "@emotion/styled";

const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.background};
    text-align: center;
    padding: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin: 0;
    padding-bottom: ${({ theme }) => theme.spacing.md};
`;
const Btn = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.lg};
`;
const BtnGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};
`;

export default function Header({ activeTab, setActiveTab }) {
    return (
        <StyledHeader>
            <Title>숫자 야구 || 깃허브 검색</Title>
            <BtnGroup>
                <Btn onClick={() => setActiveTab("baseball")} active={activeTab === "baseball"}>
                    숫자 야구
                </Btn>
                <Btn onClick={() => setActiveTab("github")} active={activeTab === "github"}>
                    깃허브 검색
                </Btn>
            </BtnGroup>
        </StyledHeader>
    );
}
