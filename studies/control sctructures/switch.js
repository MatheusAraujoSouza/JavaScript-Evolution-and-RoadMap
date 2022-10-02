const printWithSwitch = number => {

    switch(Math.floor(number)){
        case 10:
        case 9:
            console.log("the number is 9 or 10")
            break;
        case 8: case 7:
            console.log("the number is 8 or 7")
            break;
        case 6: case 5: case 4: 
            console.log("the number is in an open range between 4 and 6")
            break;
        default:
            console.log("the number is less than 4")

    }
}


printWithSwitch(8);

printWithSwitch(2);

printWithSwitch(4);
