console.log(makeFraction(Math.PI))
console.log(makeFraction(Math.E))
console.log(makeFraction(Math.sqrt(2)))

function makeFraction(x){
    let z=Math.floor(x)
    x=x.toString()
    x=x.split("")
    for (let i = 0; i < x.length; i++) {
        if(x[i]=="."){
            x.splice(0,i+1)
            break
        }
    }
    let d=10**x.length
    let n=x.join("")
    n=parseFloat(n)+z*d
    return reduce(n,d)
}

function reduce(numerator,denominator){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerator,denominator);
    return numerator/gcd+"/"+denominator/gcd
  }