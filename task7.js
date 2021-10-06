function saleHotdogs(n){
    var price
    if(n < 5) price = 100
    else if(n>=5 && n<10) price = 95
    else price = 90
    return n*price
  }