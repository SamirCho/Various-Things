function harmonic(n){
    let sum=0
    for (let i = 1; i <= n; i++) {
        sum+=1/i
    }
    return sum
}

for (let i = 1; i < 99999999999999; i++) {
    console.log(harmonic(i)-Math.log(i))
}