import axios from "axios";

export async function login({ username, password }: { username: string; password: string }) {
    return await axios.post("https://api.atsopt-seminar4.site/api/v1/auth/signin", {
        loginId: username,
        password,
    });
}
