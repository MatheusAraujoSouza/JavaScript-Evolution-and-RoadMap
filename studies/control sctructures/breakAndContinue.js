const numbers = [1,2,2,344,5,56,66,7,87,889,9,10]

//both continue and break apply to the closer while or for
for(x in numbers){
    if(x == 5) break; // stop loop
    console.log(`The current index is ${x}`)
}

console.log(`\n\n`)

for(x in numbers){
    if(x == 5) continue; // stop the current loop and go to the next loop
    console.log(`The current index is ${x}`)
}
console.log(`\n\n\n`)

for(let i=0 ; i < 10 ; i++){
    for(let j=0; j<10; j++){
        if(j == 5) break;
        console.log(i,j)
    }
}