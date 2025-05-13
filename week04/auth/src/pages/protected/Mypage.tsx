import { useEffect, useState } from "react";
import axios from "axios";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Title, Link } from "./styles";
import { useNickname } from "../../contexts/NicknameContext";

function Mypage() {
    const { nickname, setNickname } = useNickname();
    const [input, setInput] = useState(nickname);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    // 1️⃣ 닉네임 조회
    useEffect(() => {
        const fetchNickname = async () => {
            const userId = localStorage.getItem("userId");
            if (!userId) return;

            try {
                const response = await axios.get("https://api.atsopt-seminar4.site/api/v1/users/me", {
                    headers: {
                        userId,
                    },
                });

                if (response.data.success && response.data.data?.nickname) {
                    setNickname(response.data.data.nickname);
                }
            } catch (err) {
                console.error("닉네임 불러오기 실패:", err);
            }
        };

        fetchNickname();
    }, []);

    // 2️⃣ 닉네임 유효성 검사 함수
    const isValidNickname = (value: string) => /^[가-힣a-zA-Z0-9]{1,20}$/.test(value);

    // 3️⃣ 수정 요청 함수
    const handleSubmit = async () => {
        const userId = localStorage.getItem("userId");
        if (!userId) return;

        if (!isValidNickname(nickname)) {
            setError("닉네임은 한글/영문/숫자만 사용 가능하며 1~20자여야 합니다.");
            setMessage("");
            return;
        }

        try {
            const response = await axios.patch(
                "https://api.atsopt-seminar4.site/api/v1/users",
                { nickname },
                {
                    headers: {
                        userId,
                    },
                }
            );

            if (response.data.success) {
                setNickname(input); // ✅ Context도 업데이트
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
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
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
