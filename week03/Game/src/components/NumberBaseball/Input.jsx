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

export default function Input({ value, setValue, onSubmit, disabled }) {
    return (
        <Container>
            <InputBox type="text" maxLength={3} value={value} onChange={(e) => setValue(e.target.value)} disabled={disabled} placeholder="3자리 숫자 입력" />
            <Btn onClick={onSubmit} disabled={disabled}>
                입력
            </Btn>
        </Container>
    );
}
