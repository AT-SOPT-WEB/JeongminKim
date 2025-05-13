import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Title, Link } from "./styles";

function Login() {
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e: { target: { name: any; value: any } }) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const isFormValid = form.username.trim() !== "" && form.password.trim() !== "";

    const handleSubmit = () => {
        // 로그인 로직 처리
        console.log("로그인 시도:", form);
    };

    return (
        <Container>
            <Title>로그인</Title>

            <Input type="text" name="username" placeholder="아이디" value={form.username} onChange={handleChange} />
            <Input type="password" name="password" placeholder="비밀번호" value={form.password} onChange={handleChange} />

            <Button isValid={isFormValid} disabled={!isFormValid} onClick={handleSubmit}>
                로그인
            </Button>

            <Link to="/signup">아직 회원이 아니신가요?</Link>
        </Container>
    );
}

export default Login;
