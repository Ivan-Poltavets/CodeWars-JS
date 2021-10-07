function threeInOne(arr){
    var arr1 = []
    var sum = []
    for(let i = 0;i<arr.length;i++){
      if(i%3==0) arr1.push(arr.slice(i,i+3))
      for(let j = 0;j<arr1.length;j++){
        sum[j] = arr1[j][0] + arr1[j][1] + arr1[j][2]
      }
    }
    return sum
  }