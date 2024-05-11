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
      for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
        if(num%i==0){
          return false
        }
      }
      return true
    }
}

function isMersenne(num){
    if(isPrime(num)&&isPrime(2**num-1)){
        return true
    }else{
        return false
    }
}

// for (let i = 0; i < 10000; i++) {
//     if(isMersenne(i)){
//         console.log(i)
//     }
// }

console.log(isMersenne(127))