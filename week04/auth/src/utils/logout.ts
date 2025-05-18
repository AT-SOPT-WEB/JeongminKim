export function logout(setNickname: (nickname: string) => void) {
    localStorage.removeItem("userId");
    localStorage.removeItem("nickname");
    setNickname("");
}
