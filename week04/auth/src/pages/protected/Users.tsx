import { useState } from "react";
import axios from "axios";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Title, Text, List } from "./styles";

function Users() {
    const [keyword, setKeyword] = useState("");
    const [nicknameList, setNicknameList] = useState<string[]>([]);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        try {
            const response = await axios.get("https://api.atsopt-seminar4.site/api/v1/users", {
                params: keyword ? { keyword } : {},
            });

            if (response.data.success && response.data.data?.nicknameList) {
                setNicknameList(response.data.data.nicknameList);
                setError("");
            } else {
                setError("회원 목록을 불러올 수 없습니다.");
                setNicknameList([]);
            }
        } catch (err: any) {
            setError(err.response?.data?.message || "서버 오류가 발생했습니다.");
            setNicknameList([]);
        }
    };

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
