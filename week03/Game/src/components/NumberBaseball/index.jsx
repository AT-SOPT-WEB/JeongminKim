// NumberBaseball.jsx
import styled from "@emotion/styled";
import Input from "./Input";
import Msg from "./Msg";
import List from "./List";
import { useState } from "react";
import { generateAnswer } from "./utils/generateAnswer";

import { handleSubmit } from "./utils/handleSubmit";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export default function NumberBaseball() {
    const [answer, setAnswer] = useState(generateAnswer()); // 무작위 3자리 숫자
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");
    const [history, setHistory] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    function onSubmit() {
        handleSubmit({
            inputValue,
            answer,
            setInputValue,
            setMessage,
            setHistory,
            setAnswer,
            setGameOver,
        });
    }

    return (
        <Container>
            <Input value={inputValue} setValue={setInputValue} onSubmit={onSubmit} disabled={gameOver} />

            <Msg message={message} />
            <List history={history} />
        </Container>
    );
}
