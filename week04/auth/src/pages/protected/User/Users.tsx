import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Container, Title, Text, List } from "../styles";
import { useUserSearch } from "./useUserSearch";

function Users() {
    const {
        keyword,
        setKeyword,
        nicknameList,
        error,
        handleSearch,
    } = useUserSearch();

    return (
        <Container>
            <Title>회원 조회</Title>

            <Input
                type="text"
                name="nickname"
                placeholder="닉네임 검색 (선택)"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />

            <Button onClick={handleSearch} isValid={true}>
                조회하기
            </Button>

            {error && <Text style={{ color: "red" }}>{error}</Text>}

            <Text>회원 목록</Text>
            <List>
                <ul>
                    {nicknameList.map((nickname, index) => (
                        <li key={index}>{nickname}</li>
                    ))}
                </ul>
            </List>
        </Container>
    );
}

export default Users;
