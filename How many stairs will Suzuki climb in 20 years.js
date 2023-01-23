function stairsIn20(s){
    return s.reduce((acc,el)=>acc+=el.reduce((acc2,el2)=>acc2+=el2,0),0)*20
  }