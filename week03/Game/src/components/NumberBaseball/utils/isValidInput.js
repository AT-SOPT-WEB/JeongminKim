export function isValidInput(value) {
    if (!/^\d{3}$/.test(value)) return false;
    const digits = new Set(value);
    return digits.size === 3;
}
