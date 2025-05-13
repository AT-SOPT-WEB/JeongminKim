import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { Link, Text,Header, Nav } from "./styles";
import { useNickname } from "../../contexts/NicknameContext"; // context에서 가져오기

function DashboardLayout() {
    const { nickname, setNickname } = useNickname();


    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("nickname");
        setNickname(""); // Context도 초기화
    };

    useEffect(() => {
        const fetchNickname = async () => {
            const userId = localStorage.getItem("userId");
            if (!userId || nickname) return; // 이미 있으면 호출 안 함

            try {
                const response = await axios.get("https://api.atsopt-seminar4.site/api/v1/users/me", {
                    headers: {
                        userId: userId,
                    },
                });

                if (response.data.success && response.data.data?.nickname) {
                    setNickname(response.data.data.nickname);
                }
            } catch (err) {
                console.error("유저 정보 불러오기 실패:", err);
            }
        };

        fetchNickname();
    }, [nickname, setNickname]);

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

