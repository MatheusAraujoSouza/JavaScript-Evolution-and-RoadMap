const array = [1,2,4,5.6,123.6,123453456.6]

for(let i=0; i < array.length ; i++){
    console.log(`i = ${i}`);
}


for(i in array){
    console.log(`index = ${i} and value = ${array[i]}`);
}

const person = {
    name:'Matheus',
    height:'1.85',
    age:'26',
    habitation:'Sp - Brazil'
}

for(i in person){
    console.log(i,person[i]);
}
console.log(person.name)
