import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.lg};
    width: 100%;
`;
const InputBox = styled.input`
    width: 400px;
    height: 40px;
    border: 2px solid ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    box-sizing: border-box;
`;
const Btn = styled.button`
    width: 100px;
    height: 40px;
    border: none;
    border-radius: ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
`;

export default function Input() {
    return (
        <Container>
            <InputBox type="text" maxLength={3} placeholder="3자리 숫자를 입력하세요" />
            <Btn type="button">입력</Btn>
        </Container>
    );
}
