function summation(startTerm,finalTerm,p){
    let sum=0
    let x=2
    for (let n = startTerm; n < finalTerm; n++) {
        sum+=1/n**p
    }
    return sum
}

function factorial(x){
    if(x<=1){
        return 1
    }
    return x*factorial(x-1)
}

for (let i = 2; i < 100; i++) {
    console.log(summation(1,1000,i))
}