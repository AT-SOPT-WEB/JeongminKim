import { useState } from "react";

export default function useGitHubUser(addToRecent) {
    const [username, setUsername] = useState("");
    const [userInfo, setUserInfo] = useState({ status: "idle", data: null });

    const getUserInfo = async (user) => {
        setUserInfo({ status: "pending", data: null });

        try {
            const response = await fetch(`https://api.github.com/users/${user}`);
            if (!response.ok) throw new Error();
            const data = await response.json();
            setUserInfo({ status: "resolved", data });
            if (addToRecent) addToRecent(user); // 최근 검색어 등록
        } catch {
            setUserInfo({ status: "rejected", data: null });
        }
    };

    const clearUserInfo = () => {
        setUserInfo({ status: "idle", data: null });
        setUsername("");
    };

    return {
        username,
        setUsername,
        userInfo,
        getUserInfo,
        clearUserInfo,
    };
}
