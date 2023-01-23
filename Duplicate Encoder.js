function duplicateEncode(word){
    let hash = {}
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        if (hash[word[i]] !== undefined) {
            hash[word[i]] = ')'
        } else {
            hash[word[i]] = '('
        }
    }
    return word.split('').map(el=>hash[el]).join('')
}