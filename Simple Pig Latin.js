function pigIt(str){
    return str.split(' ').map(e=>(e+e[0]+'ay').split('').splice(1).join('')).join(' ')
}