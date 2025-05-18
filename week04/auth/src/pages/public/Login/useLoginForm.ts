import { useState } from "react";

export function useLoginForm() {
    const [form, setForm] = useState({ username: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const isFormValid = form.username.trim() !== "" && form.password.trim() !== "";

    return { form, handleChange, isFormValid };
}
