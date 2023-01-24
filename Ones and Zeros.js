const binaryArrayToNumber = arr => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return parseInt(str, 2);
};