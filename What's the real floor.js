function getRealFloor(n) {
    if(n < 1){
        return n;
    }
    else{
        if(n <= 12)
            return n-1;
        else
            return n-2;
    }
}