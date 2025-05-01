import styled from "@emotion/styled";

export default function Input({ username, setUsername, onSearch, onClear }) {
    return (
        <Container>
            <InputBox type="text" placeholder="깃허브 아이디 입력" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Btn onClick={onSearch}>검색</Btn>
            <Btn onClick={onClear}>❌</Btn>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.lg};
    width: 90%;
`;

const InputBox = styled.input`
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    box-sizing: border-box;
`;

const Btn = styled.button`
    width: 100px;
    padding: ${({ theme }) => theme.spacing.md};
    border: none;
    border-radius: ${({ theme }) => theme.spacing.lg};
    background-color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.text};
`;
