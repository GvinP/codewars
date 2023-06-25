function factorial(n) {
    return new Array(n).fill(0).reduce((a,_,i)=>a*=i+1, 1);
  }
  
function strong(n) {
  return n === n.toString().split("").reduce((a,e)=>a+=factorial(+e),0) ? "STRONG!!!!" : "Not Strong !!";
}