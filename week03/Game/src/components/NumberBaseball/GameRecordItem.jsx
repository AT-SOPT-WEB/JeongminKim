import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: ${({ theme }) => theme.spacing.xs} 0;
`;

const Message = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text};
`;

export default function GameRecordItem({ guess, result }) {
    return (
        <Container>
            <Message>{`${guess} - ${result}`}</Message>
        </Container>
    );
}
