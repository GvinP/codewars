function highAndLow(numbers){
    const sorted = numbers.split(' ').map(el=>+el).sort((a,b)=>b-a)
    return `${sorted[0]} ${sorted[sorted.length-1]}`
}