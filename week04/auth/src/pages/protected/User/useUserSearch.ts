import { useState } from "react";
import { fetchUsers } from "../../../apis/User";

export function useUserSearch() {
    const [keyword, setKeyword] = useState("");
    const [nicknameList, setNicknameList] = useState<string[]>([]);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        try {
            const list = await fetchUsers(keyword);
            setNicknameList(list);
            setError("");
        } catch (err: any) {
            setError(err.message || "서버 오류가 발생했습니다.");
            setNicknameList([]);
        }
    };

    return {
        keyword,
        setKeyword,
        nicknameList,
        error,
        handleSearch,
    };
}
