import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;
const Message = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.text};
`;

export default function Msg() {
    return (
        <Container>
            <Message>이전 기록</Message>
        </Container>
    );
}
