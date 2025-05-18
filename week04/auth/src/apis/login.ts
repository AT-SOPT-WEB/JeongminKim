import apiClient from "./axiosInstance";

export async function login({ username, password }: { username: string; password: string }) {
    return await apiClient.post("/auth/signin", {
        loginId: username,
        password,
    });
}
