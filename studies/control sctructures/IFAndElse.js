const printResult = function(number){
    if(number <= -10)
        console.log("the number is less than 10");
    else
        console.log("the number is greater than 10");
}

printResult(10);
printResult(-1);
printResult(-11);

//using arrow function 

const printResultWithArrowFunction = number => {
    if(number => -10)
        console.log("printResultWithArrowFunction : the number is greater than 10");
    else
        console.log("printResultWithArrowFunction : the number is less than 10");

}


printResultWithArrowFunction(20);
printResultWithArrowFunction(-123);

