// Signup.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSignupForm } from "./useSignupForm";
import { signup } from "../../../apis/Signup";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Container, Title, Error } from "../styles";

function Signup() {
    const {
        step, setStep, form, confirmPassword, errors, currentKey,
        currentValue, handleChange, isCurrentStepValid
    } = useSignupForm();

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleNext = async () => {
        if (!isCurrentStepValid) return;

        if (step === 2) {
            try {
                setLoading(true);
                await signup({
                    username: form.username,
                    password: form.password,
                    nickname: form.nickname,
                });
                alert("회원가입이 완료되었습니다!");
                navigate("/login");
            } catch (error: any) {
                alert("회원가입에 실패했습니다.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        } else {
            setStep(step + 1);
        }
    };

    return (
        <Container>
            <Title>회원가입</Title>

            {step === 0 && (
                <>
                    <Input name="username" placeholder="아이디 (영문, 숫자 8~20자)" value={form.username} onChange={handleChange} />
                    {errors.username && <Error>{errors.username}</Error>}
                </>
            )}

            {step === 1 && (
                <>
                    <Input name="password" type="password" placeholder="비밀번호" value={form.password} onChange={handleChange} />
                    <Input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={handleChange} />
                    {errors.password && <Error>{errors.password}</Error>}
                    {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
                </>
            )}

            {step === 2 && (
                <>
                    <Input name="nickname" placeholder="닉네임" value={form.nickname} onChange={handleChange} />
                    {errors.nickname && <Error>{errors.nickname}</Error>}
                </>
            )}

            <Button onClick={handleNext} disabled={!isCurrentStepValid || loading} isValid={isCurrentStepValid}>
                {step < 2 ? "다음" : "가입하기"}
            </Button>
        </Container>
    );
}

export default Signup;
