import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import axios from "axios";
import { Link, Text } from "./styles";

function DashboardLayout() {
    const [nickname, setNickname] = useState<string>("");

    useEffect(() => {
        const fetchNickname = async () => {
            try {
                const userId = localStorage.getItem("userId");
                if (!userId) return;

                const response = await axios.get("https://api.atsopt-seminar4.site/api/v1/users/me", {
                    headers: {
                        userId: userId, // 서버가 userId를 헤더로 요구함
                    },
                });

                if (response.data.success && response.data.data?.nickname) {
                    setNickname(response.data.data.nickname);
                } else {
                    console.warn("닉네임 정보 없음");
                }
            } catch (err) {
                console.error("유저 정보 불러오기 실패:", err);
            }
        };

        fetchNickname();
    }, []);

    return (
        <>
            <Header>
                <Nav>
                    <Link to="/mypage">내 정보</Link>
                    <Link to="/users">회원 조회</Link>
                    <Link to="/login">로그아웃</Link>
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

const Header = styled.header`
    display: flex;
    gap: 20px;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: space-between;
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;
