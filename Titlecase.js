function titleCase(str) {
    // Cara pertama
    // const words = str.toLowerCase().split(" ");
    // for (let i=0; i < words.length; i++) {
    //   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    // }
    // return words.join(" ");

    // Cara Kedua
    const words = str.toLowerCase().split(" ").map(function (e) {
        return e[0].toUpperCase() + e.slice(1);
    })
    return words.join(" ");
}

titleCase("Saya sedang belajar algoritma dan javascript");