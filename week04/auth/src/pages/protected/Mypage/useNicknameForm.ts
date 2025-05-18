// useNicknameForm.ts
import { useState, useEffect } from "react";
import { useNickname } from "../../../contexts/NicknameContext";
import { isValidNickname } from "./validation";
import { updateNickname } from "../../../apis/Mypage";

export function useNicknameForm() {
    const { nickname, setNickname } = useNickname();
    const [inputNickname, setInputNickname] = useState(nickname);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        setInputNickname(nickname);
    }, [nickname]);

    const handleSubmit = async () => {
        const userId = localStorage.getItem("userId");
        if (!userId) return;

        if (!isValidNickname(inputNickname)) {
            setError("닉네임은 한글/영문/숫자만 사용 가능하며 1~20자여야 합니다.");
            setMessage("");
            return;
        }

        try {
            await updateNickname(userId, inputNickname);
            setNickname(inputNickname);
            setMessage("닉네임이 성공적으로 변경되었습니다.");
            setError("");
        } catch (err: any) {
            setError(err.message || "서버 오류가 발생했습니다.");
            setMessage("");
        }
    };

    return {
        inputNickname,
        setInputNickname,
        handleSubmit,
        error,
        message,
    };
}
