import { useState } from "react";
import styled from "@emotion/styled";
import Input from "./Input";
import UserCard from "./UserCard";
import RecentList from "./RecentList";
import useRecentUsers from "../../hooks/useRecentUsers";

export default function GitHubSearch() {
    const [username, setUsername] = useState("");
    const [userInfo, setUserInfo] = useState({ status: "idle", data: null });

    const { recentUsers, addUser, removeUser } = useRecentUsers();
    const getUserInfo = async (user) => {
        setUserInfo({ status: "pending", data: null });

        try {
            const response = await fetch(`https://api.github.com/users/${user}`);
            if (!response.ok) throw new Error();
            const data = await response.json();
            setUserInfo({ status: "resolved", data });
            addUser(user);
        } catch {
            setUserInfo({ status: "rejected", data: null });
        }
    };
    const clearUserInfo = () => {
        setUserInfo({ status: "idle", data: null });
        setUsername("");
    };

    return (
        <Container>
            <Input username={username} setUsername={setUsername} onSearch={() => getUserInfo(username)} />
            <RecentList
                recentUsers={recentUsers}
                onSelect={(username) => {
                    setUsername(username);
                    getUserInfo(username);
                }}
                onRemove={removeUser}
            />

            <UserCard userInfo={userInfo} onClear={clearUserInfo} />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
