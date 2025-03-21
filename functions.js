let buttonPresses = 0;

function helloWorld(){
    alert('Hello World');
    outputPresses();
}  

function outputPresses(){
    buttonPresses++; 
    console.log("Times pressed:" + buttonPresses);
}

function askForNumber(){
    let value = prompt("Enter a number");
    if (value!=0){
        console.log("You entered: " + factorial(value));
    }
    
}

function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
}

factorial(5);
