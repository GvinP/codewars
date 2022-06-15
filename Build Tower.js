function towerBuilder(nFloors) {
    const n = 1 + (nFloors - 1) * 2
    const rez = []
    let middleRez = []
    for (let i = 1; i <= nFloors; i++) {
        for (let j = 1; j <= n; j++) {
            const b = 1 + (i - 1) * 2
            if (j<=((n-b)/2)||j>((n-b)/2+b)) {
                middleRez.push(" ")
            } else {
                middleRez.push("*")
            }
        }
        rez.push(middleRez.join(''))
        middleRez = []
    }
    return rez
}