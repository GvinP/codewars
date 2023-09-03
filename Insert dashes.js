function insertDash(num) {
    return String(num).split('').map((el,i,arr)=> el%2 && arr[i+1]%2 ? el+'-' : el).join('');
 }
 