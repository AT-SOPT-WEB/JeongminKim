import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Title, Text } from "./styles";

function Users() {
    return (
        <Container>
            <Title>회원 조회</Title>
            <Input
                type="text"
                name="nickname"
                placeholder="닉네임"
                value={""}
                onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                    throw new Error("Function not implemented.");
                }}
            />
            <Button>조회하기</Button>
            <Text>회원 목록</Text>
        </Container>
    );
}

export default Users;
