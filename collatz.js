function cc(x,n){
    if(x==1){
        console.log("Done for "+n)
    }else if(x%2==0){
        x/=2
        console.log(x)
        cc(x,n)       
    }else if(x%2==1){
        x=3*x+1
        console.log(x)
        cc(x,n)
    }
}

for (let i = 1; i < 9999; i++) {
    console.log(i)
    cc(i,i)
}
cc(29,29)