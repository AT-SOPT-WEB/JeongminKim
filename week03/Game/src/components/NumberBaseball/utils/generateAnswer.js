export function generateAnswer() {
    const digits = [];
    while (digits.length < 3) {
        const rand = Math.floor(Math.random() * 10);
        if (!digits.includes(rand)) digits.push(rand);
    }
    return digits.join("");
}
