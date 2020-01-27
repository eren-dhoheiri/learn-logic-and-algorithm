function truncateString(str, num) {
    if (num >= str.length) return str;
    if (num <= 3) return str.slice(0, num) + "...";
    return str.slice(0, num - 3) + "...";
}

truncateString("A-ticket a-tasked A green and yellow basket", 11);
truncateString("Eren goes to school", 20);