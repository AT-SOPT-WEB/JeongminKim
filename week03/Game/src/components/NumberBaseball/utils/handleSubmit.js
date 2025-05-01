import { isValidInput } from "./isValidInput";
import { getResult } from "./getResult";
import { generateAnswer } from "./generateAnswer";

export function handleSubmit({ inputValue, answer, setInputValue, setMessage, setHistory, setAnswer, setGameOver }) {
    if (!isValidInput(inputValue)) {
        setMessage("⚠️ 3자리의 중복 없는 숫자를 입력해주세요");
        return;
    }

    const result = getResult(inputValue, answer);
    setHistory((prev) => [...prev, { guess: inputValue, result }]);

    if (result === "3S 0B") {
        setMessage("🎉 정답입니다! 게임을 다시 시작합니다...");
        setGameOver(true);
        setTimeout(() => {
            setAnswer(generateAnswer());
            setInputValue("");
            setHistory([]);
            setMessage("");
            setGameOver(false);
        }, 3000);
    } else {
        setMessage(`${inputValue} → ${result}`);
    }

    setInputValue("");
}
