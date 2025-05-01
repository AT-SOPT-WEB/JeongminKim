import styled from "@emotion/styled";

export default function UserCard({ userInfo, onClear }) {
    if (userInfo.status === "pending") return <Text>로딩 중...</Text>;
    if (userInfo.status === "rejected") return <Text>😢 유저를 찾을 수 없습니다</Text>;
    if (userInfo.status !== "resolved") return null;

    const data = userInfo.data;

    return (
        <Container>
            <Btn onClick={onClear}>❌</Btn>
            <Link href={data.html_url} target="_blank" rel="noreferrer">
                <Img src={data.avatar_url} alt="avatar" />
            </Link>
            <Link href={data.html_url} target="_blank" rel="noreferrer">
                {data.name}
            </Link>
            <Text>아이디: {data.login}</Text>
            <Text>소개: {data.bio}</Text>
            <Text>팔로워: {data.followers}</Text>
            <Text>팔로잉: {data.following}</Text>
        </Container>
    );
}

const Img = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    border: 4px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.spacing.lg};
    border: none;
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.lg};
    width: 60%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: bold;
    margin: ${({ theme }) => theme.spacing.sm} 0;
    color: ${({ theme }) => theme.colors.text};
`;

const Btn = styled.button`
    align-self: flex-end;
    border: none;
    background: none;
    font-size: 1.2rem;
    cursor: pointer;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text};
`;
