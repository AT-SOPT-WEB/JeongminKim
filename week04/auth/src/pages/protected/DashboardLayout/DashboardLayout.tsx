// DashboardLayout.tsx
import { Outlet } from "react-router-dom";
import { Link, Text, Header, Nav } from "../styles";
import { useNickname } from "../../../contexts/NicknameContext";
import { logout } from "../../../utils/logout";
import { useUserInfo } from "./useUserInfo";

function DashboardLayout() {
    const { nickname, setNickname } = useNickname();

    useUserInfo(); // 닉네임 불러오기

    const handleLogout = () => {
        logout(setNickname);
    };

    return (
        <>
            <Header>
                <Nav>
                    <Link to="/mypage">내 정보</Link>
                    <Link to="/users">회원 조회</Link>
                    <Link to="/login" onClick={handleLogout}>로그아웃</Link>
                </Nav>
                <Text>{nickname ? `${nickname}님` : ""}</Text>
            </Header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default DashboardLayout;
