function sumDigits(number) {
    if(number<0) number = number*(-1)
    return number.toString().split('').reduce((acc,el)=>acc+(+el),0)
}