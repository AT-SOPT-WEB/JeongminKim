import styled from "@emotion/styled";
import GameRecordItem from "./GameRecordItem";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default function List() {
    return (
        <Container>
            <p>이전기록 리스트 목록</p>
            <GameRecordItem />
            <GameRecordItem />
            <GameRecordItem />
        </Container>
    );
}
