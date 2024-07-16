//count characters
function countCharacters(S) {
    let countA = 0;
    let countD = 0;
    for (let char of S) {
        if (char === 'A') {
            countA++;
        } else if (char === 'D') {
            countD++;
        }
    }
    return [countA, countD];
}
let input = "AbaDd";
console.log(countCharacters(input)); // Output: [1, 1]
