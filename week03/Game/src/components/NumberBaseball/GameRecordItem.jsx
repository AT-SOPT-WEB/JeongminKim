import styled from "@emotion/styled";

export default function GameRecordItem({ guess, result }) {
    return (
        <Container>
            <Message>{`${guess} - ${result}`}</Message>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.spacing.lg};
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
`;

const Message = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: white;
    width: 100%;
    text-align: center;
`;
