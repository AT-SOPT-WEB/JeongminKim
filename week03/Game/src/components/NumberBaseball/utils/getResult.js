export function getResult(input, answer) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
        if (input[i] === answer[i]) strike++;
        else if (answer.includes(input[i])) ball++;
    }

    if (strike === 0 && ball === 0) return "OUT";
    return `${strike}S ${ball}B`;
}
