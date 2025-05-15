import axios from "axios";

export async function fetchUsers(keyword: string) {
    const response = await axios.get("https://api.atsopt-seminar4.site/api/v1/users", {
        params: keyword ? { keyword } : {},
    });

    if (response.data.success && response.data.data?.nicknameList) {
        return response.data.data.nicknameList as string[];
    } else {
        throw new Error("회원 목록을 불러올 수 없습니다.");
    }
}
