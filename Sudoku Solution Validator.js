function validSolution(board){
    let combinations = []
    const rows = board
    const columns = board.map((row, index, rows) => rows.map(row => row[index]))
    const blocks = []


    const temp = board
        .map(row => [row.slice(0, 3), row.slice(3, 6), row.slice(6, 9)])
        .reduce((prev, curr) => prev.concat(curr), [])

    let count = 0
    for(let i=0; i<9; i++) {
        let pos

        if(count === 3) {
            pos = i*3
            count = 0
        }
        blocks.push([].concat(temp[pos], temp[pos+3], temp[pos+6]))
        count++
    }

    combinations = combinations.concat(rows, columns, blocks)

    return !combinations.some(function(combination) {
        let result = Boolean(combination.join('').match(/(\d)(?=.*\1)/))
        if(result)
        return result
    })
}