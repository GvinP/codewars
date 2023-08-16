function jumpingNumber(n){
    return n.toString().split('').every((el,i,arr)=> !i||Math.abs(el-arr[i-1])===1)? 'Jumping!!' : 'Not!!';
  }