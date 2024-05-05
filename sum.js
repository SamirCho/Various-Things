function summation(startTerm){
    let sum=0
    let x=5.56
    for (let n = startTerm; n < 169; n++) {
        sum+=(-1)**n*x**(2*n)/factorial(2*n)
    }
    return sum
}

function factorial(x){
    if(x<=1){
        return 1
    }
    return x*factorial(x-1)
}

console.log(summation(0))