function decipher(codedMessage){
    const dict = 'abcdefghijklmnopqrstuvwxyz'
    const dictU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    codedMessage=codedMessage.split(``).map(v=>dict.includes(v)?dict[(dict.indexOf(v)+7)%26]:v).join(``)
    return codedMessage.split(``).map(v=>dictU.includes(v)?dictU[(dictU.indexOf(v)+7)%26]:v).join(``)
 }