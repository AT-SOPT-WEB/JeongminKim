import { useEffect, useState } from "react";

const STORAGE_KEY = "recentGithubUsers";

export default function useRecentUsers() {
    const [recentUsers, setRecentUsers] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) setRecentUsers(JSON.parse(stored));
    }, []);

    const addUser = (username) => {
        if (!username) return;
        const updated = [username, ...recentUsers.filter((u) => u !== username)];
        setRecentUsers(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    };

    const removeUser = (username) => {
        const updated = recentUsers.filter((u) => u !== username);
        setRecentUsers(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    };

    return { recentUsers, addUser, removeUser };
}
