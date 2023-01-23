function rgb(r, g, b){
    const convert = (x) => x>255?'FF':x<0?'00':Number(x).toString(16).toUpperCase().length===1?'0'+Number(x).toString(16).toUpperCase():Number(x).toString(16).toUpperCase()
    return `${convert(r)}${convert(g)}${convert(b)}`
}