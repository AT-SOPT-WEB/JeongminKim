import apiClient from "./axiosInstance";

export async function signup({
    username,
    password,
    nickname,
}: {
    username: string;
    password: string;
    nickname: string;
}) {
    return await apiClient.post("/auth/signup", {
        loginId: username,
        password,
        nickname,
    });
}
