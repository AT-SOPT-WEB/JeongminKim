import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Container, Title, Link } from "../styles";
import { useNicknameForm } from "./useNicknameForm";

function Mypage() {
    const {
        inputNickname,
        setInputNickname,
        handleSubmit,
        error,
        message,
    } = useNicknameForm();

    return (
        <Container>
            <Title>내 정보</Title>

            <Input
                type="text"
                name="nickname"
                placeholder="닉네임"
                value={inputNickname}
                onChange={(e) => setInputNickname(e.target.value)}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}
            {message && <p style={{ color: "green" }}>{message}</p>}

            <Button onClick={handleSubmit} isValid={true}>
                수정하기
            </Button>

            <Link to="/login">로그아웃</Link>
        </Container>
    );
}

export default Mypage;
