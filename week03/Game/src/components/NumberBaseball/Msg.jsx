import styled from "@emotion/styled";

export default function Msg({ message }) {
    return (
        <Container>
            <Message>{message}</Message>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 70%;
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;
const Message = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.error};
    font-weight: bold;
`;
