function summation(startTerm,finalTerm){
    let sum=0
    let x=0.9
    for (let n = startTerm; n < finalTerm; n++) {
        sum+=choose(-1/2,n) * (-1)**n * x**(2*n+1)/(2*n+1)
        }
    return sum
}

function factorial(x,a){
    if(x<=1){
        return 1
    }
    return x*factorial(x-a)
}


function gamma(z) {
    var g = 7;
    var C = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];

    if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
    else {
        z -= 1;

        var x = C[0];
        for (var i = 1; i < g + 2; i++)
        x += C[i] / (z + i);

        var t = z + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, (z + 0.5)) * Math.exp(-t) * x;
    }
}

function choose(a,b){
    return gamma(a+1)/[gamma(b+1)*gamma(a-b+1)]
}

for (let i = 0; i < 7; i++) {
    console.log(choose(-1/2,i)*(-1)**i/(2*i+1))
}