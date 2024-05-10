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

for (let i = 0; i < 30; i++) {
    if(isPrime(i)){
        console.log([i,2**(i-1)*(2**i-1)])
    }
}