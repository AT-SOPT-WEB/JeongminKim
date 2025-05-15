// useSignupForm.ts
import { useState, ChangeEvent } from "react";
import { validate } from "./validation";

interface FormState {
    username: string;
    password: string;
    nickname: string;
}

interface ErrorState {
    username?: string;
    password?: string;
    confirmPassword?: string;
    nickname?: string;
}

export function useSignupForm() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState<FormState>({
        username: "",
        password: "",
        nickname: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<ErrorState>({});

    const keyOrder: (keyof FormState)[] = ["username", "password", "nickname"];
    const currentKey = keyOrder[step];
    const currentValue = form[currentKey];

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "confirmPassword") {
            setConfirmPassword(value);
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }

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

    const isCurrentStepValid =
        validate[currentKey](currentValue) &&
        !errors[currentKey] &&
        !(currentKey === "password" && confirmPassword !== form.password);

    return {
        step,
        setStep,
        form,
        confirmPassword,
        errors,
        keyOrder,
        currentKey,
        currentValue,
        handleChange,
        setConfirmPassword,
        isCurrentStepValid,
    };
}
