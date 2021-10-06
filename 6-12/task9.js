function padIt(str,n){
    var number = 0, result = str
    do{
      if(number % 2 == 0) result = `*${result}`
      else result = `${result}*`
      number++
    }while(number<n)
      return result
    
  }