getRandomBetween = (firstNumber, secondNumber) => Math.random() * (firstNumber + secondNumber);

console.log("executing while")

let option = 0;
let count=0;
while(option != -1 && count < 100){
    option = getRandomBetween(-1,10)
    console.log(`The current value is ${option}`);
    count++;
}

console.log("Executing do/while")
count=0;
do{
    option = getRandomBetween(-1,10)
    console.log(`The current value is ${option}`);
    count++;
}while(option != -1 && count < 100)
