const capitals = function (word) {
    const res = []
    word.split('').forEach((element, index) => {
        if (element.charCodeAt() < 97) {
            res.push(index)
        }
    })
    return res
};