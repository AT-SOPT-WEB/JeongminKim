export function isValidNickname(value: string) {
    return /^[가-힣a-zA-Z0-9]{1,20}$/.test(value);
}
