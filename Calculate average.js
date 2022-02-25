function find_average(array) {
    if(!array[0]) {return 0;}
    let average = 0;
    average = array.reduce((sum, current) => sum + current, 0);
    return average/array.length;
}