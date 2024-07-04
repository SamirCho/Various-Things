let n=27
console.log([0,n])
for (let i = 0; i < 1000; i++) {
    if(n==1){
        break
    }else if(n%2==0){
        n/=2
        console.log([i+1,n])
    }else{
        n=3*n+1
        console.log([i+1,n])
    }
}