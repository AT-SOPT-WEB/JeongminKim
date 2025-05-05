import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Title } from "./styles";
import styled from "@emotion/styled";

// 유효성 검사 정규식
const validate = {
    username: (val) => /^[a-zA-Z0-9]{8,20}$/.test(val),
    password: (val) => /^[a-zA-Z0-9]{8,20}$/.test(val),
    nickname: (val) => /^[가-힣a-zA-Z0-9]{1,20}$/.test(val),
};

// 아이디 중복 확인 (예시)
const checkUsernameDuplicate = async (username) => {
    // 실제로는 API 요청
    return true;
};

// 에러 텍스트 스타일
const ErrorText = styled.p`
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: 4px 0 12px;
`;

function Signup() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({
        username: "",
        password: "",
        nickname: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const navigate = useNavigate();

    const keyOrder = ["username", "password", "nickname"];
    const currentKey = keyOrder[step];
    const currentValue = form[currentKey];

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "confirmPassword") {
            setConfirmPassword(value);
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }

        // 실시간 유효성 검사
        let message = "";

        if (name === "username" && value && !validate.username(value)) {
            message = "아이디는 8~20자의 영문/숫자만 가능합니다.";
        } else if (name === "password" && value && !validate.password(value)) {
            message = "비밀번호는 8~20자의 영문/숫자만 가능합니다.";
        } else if (name === "confirmPassword" && value && value !== form.password) {
            message = "비밀번호가 일치하지 않습니다.";
        } else if (name === "nickname" && value && !validate.nickname(value)) {
            message = "닉네임은 한글/영문/숫자 1~20자입니다.";
        }

        setErrors((prev) => ({ ...prev, [name]: message }));
    };

    const handleNext = async () => {
        const value = currentValue;

        // 유효성 검사 실패
        if (!validate[currentKey](value)) return;

        // 아이디 중복 확인
        if (currentKey === "username") {
            setIsChecking(true);
            const isAvailable = await checkUsernameDuplicate(value);
            setIsChecking(false);
            if (!isAvailable) {
                setErrors((prev) => ({ ...prev, username: "이미 사용 중인 아이디입니다." }));
                return;
            }
        }

        // 비밀번호 확인
        if (currentKey === "password" && form.password !== confirmPassword) {
            setErrors((prev) => ({ ...prev, confirmPassword: "비밀번호가 일치하지 않습니다." }));
            return;
        }

        // 모든 통과
        if (step === 2) {
            try {
                setLoading(true);
                // await axios.post("/api/signup", form);
                alert("회원가입이 완료되었습니다!");
                navigate("/login");
            } catch (error) {
                alert("회원가입에 실패했습니다.");
            } finally {
                setLoading(false);
            }
        } else {
            setStep(step + 1);
        }
    };

    const isCurrentStepValid = validate[currentKey](currentValue) && errors[currentKey] === "" && !(currentKey === "password" && confirmPassword !== form.password);

    return (
        <Container>
            <Title>회원가입</Title>

            {step === 0 && (
                <>
                    <Input name="username" type="text" placeholder="아이디 (영문, 숫자 8~20자)" value={form.username} onChange={handleChange} />
                    {errors.username && <ErrorText>{errors.username}</ErrorText>}
                </>
            )}

            {step === 1 && (
                <>
                    <Input name="password" type="password" placeholder="비밀번호 (영문, 숫자 8~20자)" value={form.password} onChange={handleChange} />

                    <Input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={handleChange} />
                    {errors.password && <ErrorText>{errors.password}</ErrorText>}
                    {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
                </>
            )}

            {step === 2 && (
                <>
                    <Input name="nickname" type="text" placeholder="닉네임 (한글, 영어, 숫자 1~20자)" value={form.nickname} onChange={handleChange} />
                    {errors.nickname && <ErrorText>{errors.nickname}</ErrorText>}
                </>
            )}

            <Button onClick={handleNext} disabled={!isCurrentStepValid || loading || isChecking} isValid={isCurrentStepValid}>
                {step < 2 ? "다음" : "가입하기"}
            </Button>
        </Container>
    );
}

export default Signup;
