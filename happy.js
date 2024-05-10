function happy(a){
    if(a.num==1){
        return true
    }
    q=sumSquareDigits(a.num)
    a.num=q
    for (let i = 0; i < a.used.length; i++) {
        if(a.used[i]==a.num){
            return false
        }
    }
    a.used.push(q)
    return happy(a)
}

function sumSquareDigits(num){
    num=num.toString().split("")
    let sum=0
    for (let i = 0; i < num.length; i++) {
        sum+=parseInt(num[i])**2
    }
    return sum
}

function makeObject(a){
    return {
        num:a,
        used:[]
    }
}

function isHappy(num){
    return happy(makeObject(num))
}

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

let i=31
console.log(2**(i-1)*(2**i-1))

// for (let i = 0; i < 10000; i++) {
//     if(isPrime(i)&&isPrime(2**i-1)){
//         console.log([i,2**(i-1)*(2**i-1),isHappy(2**(i-1)*(2**i-1))])
//     }
// }