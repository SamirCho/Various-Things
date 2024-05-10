function factors(num){
    if(num==0){
        return([0])
    }
    if(num<0){
        return factors(-num)
    }
    let a=[]
    for (let i = 1; i <= num; i++) {
        if(num%i==0){
            a.push(i)
        }
    }
    a.pop()
    return a
}

function perfect(num){
    let sum=0
    let array=factors(num)
    for (let i = 0; i < array.length; i++) {
        sum+=array[i]
    }
    return sum
}

function isPerfect(num){
    if(perfect(num)==num){
        return true
    }else{
        return false
    }
}

// for (let i = 1; i < 1000000; i++) {
//     if(isPerfect(i)){
//         console.log(i)
//     }
// }

function isPrime(num){
    if(Math.floor(num)!=num){
        return isPrime(Math.floor(num))
    }
    if(isNaN(num)){
        return false
    }
    if(num<0){
        return isPrime(-num)
    }
    if(num==0||num==1){
      return false
    }
    if(num==2){
        return true
    }
    if(isNaN(num)){
      return false
    }else{
      for (let i = 2; i < Math.ceil(Math.sqrt(num))+1; i++) {
        if(num%i==0){
          return false
        }
      }
      return true
    }
}

// for (let i = 0; i < 30; i++) {
//     if(isPrime(i)){
//         console.log([i,2**(i-1)*(2**i-1),isPerfect(2**(i-1)*(2**i-1))])
//     }
// }

console.log(factors(2096128))