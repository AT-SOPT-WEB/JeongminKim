import apiClient from "./axiosInstance";

export async function updateNickname(userId: string, nickname: string) {
    const res = await apiClient.patch(
        "/users",
        { nickname },
        {
            headers: { userId },
        }
    );

    if (!res.data.success) {
        throw new Error(res.data.message || "닉네임 변경 실패");
    }

    return res.data;
}
