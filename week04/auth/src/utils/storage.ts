export function saveUserData({ userId, nickname }: { userId: string; nickname: string }) {
    localStorage.setItem("userId", String(userId));
    localStorage.setItem("nickname", nickname);
}
