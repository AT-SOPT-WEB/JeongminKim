// pages/Login/Login.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Container, Title, Link } from "../styles";
import { useLoginForm } from "./useLoginForm";
import { login } from "../../../apis/login";
import { saveUserData } from "../../../utils/storage"

function Login() {
    const { form, handleChange, isFormValid } = useLoginForm();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!isFormValid) return;

        try {
            const response = await login({ username: form.username, password: form.password });

            if (response.data.success && response.data.data) {
                const { userId, nickname } = response.data.data;
                saveUserData({ userId, nickname });
                navigate("/mypage");
            } else {
                setError(response.data.message || "로그인에 실패했습니다.");
            }
        } catch (err: any) {
            const message = err.response?.data?.message || "서버 오류가 발생했습니다.";
            setError(message);
        }
    };

    return (
        <Container>
            <Title>로그인</Title>

            <Input type="text" name="username" placeholder="아이디" value={form.username} onChange={handleChange} />
            <Input type="password" name="password" placeholder="비밀번호" value={form.password} onChange={handleChange} />
            <Button isValid={isFormValid} disabled={!isFormValid} onClick={handleSubmit}>
                로그인
            </Button>
            {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
            <Link to="/signup">아직 회원이 아니신가요?</Link>
        </Container>
    );
}

export default Login;
