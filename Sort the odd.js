function sortArray(array) {
    const oddArray = array
        .map(number => number !== 0 && number % 2 !== 0 ? number : undefined)
        .filter(truthyValues => truthyValues)
        .sort((a,b) => a-b);
    let index = 0;
    return array
        .map(number => number === 0 || number % 2 === 0
            ? number
            : oddArray[index++]);
}