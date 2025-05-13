import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Title, Link } from "./styles";

function Mypage() {
    return (
        <Container>
            <Title>내 정보</Title>

            <Input
                type="text"
                name="nickname"
                placeholder="닉네임"
                value={""}
                onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                    throw new Error("Function not implemented.");
                }}
            />

            <Button>수정하기</Button>
            <Link to="/login">로그아웃</Link>
        </Container>
    );
}

export default Mypage;
