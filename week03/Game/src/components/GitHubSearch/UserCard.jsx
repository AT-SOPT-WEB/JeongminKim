export default function UserCard({ userInfo }) {
    if (userInfo.status === "pending") return <p>로딩 중...</p>;
    if (userInfo.status === "rejected") return <p>😢 유저를 찾을 수 없습니다</p>;
    if (userInfo.status !== "resolved") return null;

    const data = userInfo.data;

    return (
        <div>
            <a href={data.html_url} target="_blank" rel="noreferrer">
                <img src={data.avatar_url} alt="avatar" width="100" style={{ cursor: "pointer" }} />
            </a>
            <a href={data.html_url} target="_blank" rel="noreferrer">
                <h2 style={{ cursor: "pointer" }}>{data.name}</h2>
            </a>
            <p>아이디: {data.login}</p>
            <p>소개: {data.bio}</p>
            <p>팔로워: {data.followers}</p>
            <p>팔로잉: {data.following}</p>
        </div>
    );
}
