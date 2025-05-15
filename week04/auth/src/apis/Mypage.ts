import axios from "axios";

export async function updateNickname(userId: string, nickname: string) {
    const res = await axios.patch(
        "https://api.atsopt-seminar4.site/api/v1/users",
        { nickname },
        { headers: { userId } }
    );

    if (!res.data.success) {
        throw new Error(res.data.message || "닉네임 변경 실패");
    }

    return res.data;
}
