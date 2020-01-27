function findLongestWord(str) {
    const words = str.split(' ');
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest.length;
}

findLongestWord("Hallo, nama sayan eren dan saya tinggal di Tangerang")