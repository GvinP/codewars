function dominator(arr) {
    const obj={};
    arr.map(v=>obj[v]=obj[v]?obj[v]+1:1);
    const keys=Object.keys(obj)
    const value=Object.values(obj)
    if (Math.max(...value)<arr.length/2) return -1
    return value.indexOf(Math.max(...value))===0?-1:keys[value.indexOf(Math.max(...value))]*1;
 }