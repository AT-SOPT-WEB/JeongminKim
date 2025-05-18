// useUserInfo.ts
import { useEffect } from "react";
import axios from "axios";
import { useNickname } from "../../../contexts/NicknameContext";

export function useUserInfo() {
    const { nickname, setNickname } = useNickname();

    useEffect(() => {
        const fetchNickname = async () => {
            const userId = localStorage.getItem("userId");
            if (!userId || nickname) return;

            try {
                const res = await axios.get("https://api.atsopt-seminar4.site/api/v1/users/me", {
                    headers: {
                        userId,
                    },
                });

                if (res.data.success && res.data.data?.nickname) {
                    setNickname(res.data.data.nickname);
                }
            } catch (err) {
                console.error("유저 정보 불러오기 실패:", err);
            }
        };

        fetchNickname();
    }, [nickname, setNickname]);
}
