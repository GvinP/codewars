function catchSignChange(arr) {
    return arr.reduce((acc,v,i,arr)=>(v>=0&&arr[i+1]<0)||(v<0&&arr[i+1]>=0)?acc+=1:acc,0);
  }