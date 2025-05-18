import apiClient from "./axiosInstance";

export async function fetchUsers(keyword: string) {
    const response = await apiClient.get("/users", {
        params: keyword ? { keyword } : {},
    });

    if (response.data.success && response.data.data?.nicknameList) {
        return response.data.data.nicknameList as string[];
    } else {
        throw new Error("회원 목록을 불러올 수 없습니다.");
    }
}
