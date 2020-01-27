function confirmEnding(str, target) {
    // Cara Pertama
    // if (str.endsWith(target)) {
    //   return true;
    // }
    // return false;

    //Cara kedua 
    // if (str.substr(-target.length) === target) {
    //     return true;
    // }
    // return false;

    // Cara ketiga
    return str.slice(-target.length) === target;
}

console.log(confirmEnding("Eren", "n"));
console.log(confirmEnding("Bapak", "pak"));
console.log(confirmEnding("Rumah", "ah"));
console.log(confirmEnding("Lapar", "arr"));