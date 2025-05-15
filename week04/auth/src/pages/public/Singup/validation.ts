export const validate = {
    username: (val: string) => /^[a-zA-Z0-9]{8,20}$/.test(val),
    password: (val: string) => /^[a-zA-Z0-9]{8,20}$/.test(val),
    nickname: (val: string) => /^[가-힣a-zA-Z0-9]{1,20}$/.test(val),
};
