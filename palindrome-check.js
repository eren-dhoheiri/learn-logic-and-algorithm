function palindrome(str) {
    const reg = /[\W_]/g;

    const smallStr = str.toLowerCase().replace(reg, "");

    const reversed = smallStr.split("").reverse().join('');
    if (reversed === smallStr) return true;
    return false;
}

console.log(palindrome("koDok"));
console.log(palindrome("e ye"));
console.log(palindrome("raCe car"));
console.log(palindrome("koki"));
console.log(palindrome("mulut"));