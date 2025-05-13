import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Title, Link } from "./styles";

function Login() {
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const isFormValid = form.username.trim() !== "" && form.password.trim() !== "";

    const handleSubmit = async () => {
        if (!isFormValid) return;

        try {
            const response = await axios.post("https://api.atsopt-seminar4.site/api/v1/auth/signin", {
                loginId: form.username,
                password: form.password,
            });

            console.log("로그인 응답:", response.data);

            if (response.data.success && response.data.data) {
                const { userId, nickname } = response.data.data;

                // 로컬스토리지 저장
                localStorage.setItem("userId", String(userId));
                localStorage.setItem("nickname", nickname);

                // 마이페이지로 이동
                navigate("/mypage");
            } else {
                setError(response.data.message || "로그인에 실패했습니다.");
            }
        } catch (err: any) {
            const message = err.response?.data?.message || "서버 오류가 발생했습니다.";
            setError(message);
            console.error("❌ 로그인 실패:", message);
        }
    };

    return (
        <Container>
            <Title>로그인</Title>

            <Input
                type="text"
                name="username"
                placeholder="아이디"
                value={form.username}
                onChange={handleChange}
            />
            <Input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={form.password}
                onChange={handleChange}
            />

            <Button isValid={isFormValid} disabled={!isFormValid} onClick={handleSubmit}>
                로그인
            </Button>

            {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

            <Link to="/signup">아직 회원이 아니신가요?</Link>
        </Container>
    );
}

export default Login;
