for (let i = 4641; i < 10001; i++) {
    if(i**3==dude(i**3)){
        console.log(b(i**3))
    }
}

function dude(i){
    i=i.toString()
    i=i.split('')
    i[3]=i[3]+","
    i[7]=i[7]+","
    i=i.join('')
    i=i.split(",")
    return (parseInt(i[0])+parseInt(i[1])+parseInt(i[2]))**3
}

function b(i){
    i=i.toString()
    i=i.split('')
    i[3]=i[3]+","
    i[7]=i[7]+","
    i=i.join('')
    i=i.split(",")
    return i
}