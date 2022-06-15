function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((acc, el)=> acc += el, 0) / classPoints.length
    if (yourPoints > average) {
        return true
    } else {
        return false
    }
}