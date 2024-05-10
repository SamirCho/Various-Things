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

console.log(happy(makeObject(28)))
