function repeatStringNumTimes(str, num) {
    // Cara pertama
    // if (num < 0) return "";
    // return str.repeat(num);

    // Cara Kedua
    let final = "";
    if (num < 0) return "";

    for (let i = 0; i < num; i++) {
        final += str;
    }

    return final;
}

repeatStringNumTimes("abc", 5);