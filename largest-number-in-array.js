function largestOfFour(arr) {
    let maxes = [];
    for (let i = 0; i < arr.length; i++) {
        let tempMax = arr[i][0];
        for (let o = 0; o < arr[i].length; o++) {
            let currentElement = arr[i][o];
            if (currentElement >= tempMax) {
                tempMax = currentElement;
            }
        }
        maxes.push(tempMax);
    }
    return maxes;
}

largestOfFour([[40, 35, 21, 14], [10, 20, 50, 22], [90, 45, 75, 65], [123, 432, 443, 250]]);