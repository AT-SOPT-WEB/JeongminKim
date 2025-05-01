import styled from "@emotion/styled";
import GameRecordItem from "./GameRecordItem";

export default function List({ history }) {
    return (
        <Container>
            {history.map((entry, i) => (
                <GameRecordItem key={i} guess={entry.guess} result={entry.result} />
            ))}
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    gap: ${({ theme }) => theme.spacing.sm};
`;
