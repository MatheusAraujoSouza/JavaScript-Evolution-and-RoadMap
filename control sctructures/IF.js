const value = 10;

if(value == "10")
    console.log("value : is equal in value");

if(value === "10")
    console.log("value : is equal in value and type");

const compare = number =>{
    if(number == "10")
        console.log("is equal in value");
    else if(number === 10)
        console.log("is equal in value and type");
    else if(number === 22)
        console.log("is equal in value and type");
    else
        console.log("not is equal");
}



compare(10);
compare(22);
compare("matheus");