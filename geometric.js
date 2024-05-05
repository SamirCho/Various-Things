function geoSum(firstTerm,ratio,startTerm,numTerms){
    let sum=0
    for (let i = startTerm; i < numTerms; i++) {
        sum+=firstTerm*ratio**i
    }
    return sum
}

console.log(geoSum(1,-1/3.14,0,100))