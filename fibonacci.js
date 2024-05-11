let array=[0,1]

let count=1000
for (let i = 2; i < count; i++) {
    array.push(array[i-2]+array[i-1])
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i+1]/array[i])
}

for (let i = 0; i < 88; i++) {
    console.log([i,array[i]])
}