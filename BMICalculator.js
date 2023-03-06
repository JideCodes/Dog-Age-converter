//simple Javascript function to calculate BMI

function bmiCalculator(weight, height){
    return Math.floor(weight / (height * height)); //added the Math.floor function to round the numbers to the nearest value and avoid decimals
}

let weight = prompt("Enter your weight: "); //this will take in the user's weight from a prompt, which is then passed as an argument/parameter in the function when called
let height = prompt("Enter your height: "); //this will do the above for the height.

alert("Your BMI is " + bmiCalculator(weight, height)); //the function is called here and the variables declared above are passed as arguments to the function
console.log("Your BMI is " + bmiCalculator(weight, height)); //this logs the same to the console.