import styled from "@emotion/styled";
import Input from "./Input";
import UserCard from "./UserCard";
import RecentList from "./RecentList";
import useRecentUsers from "../../hooks/useRecentUsers";
import useGitHubUser from "../../hooks/useGitHubUser";

export default function GitHubSearch() {
    const { recentUsers, addUser, removeUser } = useRecentUsers();
    const { username, setUsername, userInfo, getUserInfo, clearUserInfo } = useGitHubUser(addUser);

    return (
        <Container>
            <Input username={username} setUsername={setUsername} onSearch={() => getUserInfo(username)} />
            <RecentList
                recentUsers={recentUsers}
                onSelect={(user) => {
                    setUsername(user);
                    getUserInfo(user);
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
