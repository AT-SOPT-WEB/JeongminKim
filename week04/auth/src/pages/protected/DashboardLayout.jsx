import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { Link, Text } from "./styles";

function DashboardLayout() {
    return (
        <>
            <Header>
                <Nav>
                    <Link to="/mypage">내 정보</Link>
                    <Link to="/users">회원 조회</Link>
                    <Link to="/login">로그아웃</Link>
                </Nav>
                <Text>00님</Text>
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
