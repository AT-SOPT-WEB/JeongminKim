import { useEffect, useState } from "react";
import axios from "axios";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Title, Link } from "./styles";
import { useNickname } from "../../contexts/NicknameContext";
function Mypage() {
    const { nickname, setNickname } = useNickname();

    // 입력 전용 상태
    const [inputNickname, setInputNickname] = useState(nickname);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        // nickname이 바뀌었을 때 input에도 반영 (처음 렌더링 또는 외부 변경 대응)
        setInputNickname(nickname);
    }, [nickname]);

    const isValidNickname = (value: string) => /^[가-힣a-zA-Z0-9]{1,20}$/.test(value);

    const handleSubmit = async () => {
        const userId = localStorage.getItem("userId");
        if (!userId) return;

        if (!isValidNickname(inputNickname)) {
            setError("닉네임은 한글/영문/숫자만 사용 가능하며 1~20자여야 합니다.");
            setMessage("");
            return;
        }

        try {
            const response = await axios.patch(
                "https://api.atsopt-seminar4.site/api/v1/users",
                { nickname: inputNickname },
                { headers: { userId } }
            );

            if (response.data.success) {
                setNickname(inputNickname); // ✅ 여기서만 Context 업데이트
                setMessage("닉네임이 성공적으로 변경되었습니다.");
                setError("");
            } else {
                setError(response.data.message || "닉네임 변경 실패");
                setMessage("");
            }
        } catch (err: any) {
            const msg = err.response?.data?.message || "서버 오류가 발생했습니다.";
            setError(msg);
            setMessage("");
        }
    };

    return (
        <Container>
            <Title>내 정보</Title>

            <Input
                type="text"
                name="nickname"
                placeholder="닉네임"
                value={inputNickname}
                onChange={(e) => setInputNickname(e.target.value)} // ✅ 실시간 반영은 input만
            />

            {error && <p style={{ color: "red" }}>{error}</p>}
            {message && <p style={{ color: "green" }}>{message}</p>}

            <Button onClick={handleSubmit} isValid={true}>
                수정하기
            </Button>

            <Link to="/login">로그아웃</Link>
        </Container>
    );
}


export default Mypage;
