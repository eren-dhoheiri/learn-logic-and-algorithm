function reversedString(str) {
    // Cara ke-1
    // const strArr = str.split("");
    // const reverseStrArray = strArr.reverse().join("");
    // return reverseStrArray;

    // Cara ke-2
    // return str.split("").reverse().join("");

    // cara ke-3
    let final = "";
    for (let i = str.length - 1; i >= 0; i--) {
        final += str[i];
    }
    return final;
}

console.log(reversedString('hello'));
console.log(reversedString('Wolrd'));
console.log(reversedString('Start learn today!'));