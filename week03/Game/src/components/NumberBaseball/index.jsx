// NumberBaseball.jsx
import styled from "@emotion/styled";
import Input from "./Input";
import Msg from "./Msg";
import List from "./List";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default function NumberBaseball() {
    return (
        <Container>
            <Input />
            <Msg />
            <List />
        </Container>
    );
}
