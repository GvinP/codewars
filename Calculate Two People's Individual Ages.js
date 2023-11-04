function getAges(sum,difference){
    return (sum<0||difference<0||difference>sum)? null : [(sum-difference)/2+difference,(sum-difference)/2];
  };