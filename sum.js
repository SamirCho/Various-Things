function summation(startTerm,finalTerm){
    let sum=0
    let x=2
    for (let n = startTerm; n < finalTerm; n++) {
        sum+=1/n**3
    }
    return sum
}

function factorial(x){
    if(x<=1){
        return 1
    }
    return x*factorial(x-1)
}

console.log(summation(1,1000))