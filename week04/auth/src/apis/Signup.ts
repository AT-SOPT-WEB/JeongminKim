import axios from "axios";

export async function signup({ username, password, nickname }: {
    username: string;
    password: string;
    nickname: string;
}) {
    return await axios.post("https://api.atsopt-seminar4.site/api/v1/auth/signup", {
        loginId: username,
        password,
        nickname,
    });
}
