function sciNot(num){
    num=num.toString()
    num=num.split('')
    num[1]="."+num[1]
    let exp=num.length-1
    num=num.join('')
    return num+"*10^"+exp
}

console.log(sciNot(999879))