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

for (let i = 1; i < 100000000; i++) {
    if(i==perfect(i)){
        console.log(i)
    }
}