function main(){   // The main function that is called is the process of converting fahrenheit to celsius

        console.log("main was called");

        // This gets the fahrenheit number from the user input
        let fahrenheitInput = document.getElementById("fahrenheit").value; 
        let fahrenheit = parseFloat(fahrenheitInput);  // Converts the string input into a number

        let celsius = ((fahrenheit - 32) / 1.8);       // This is the formula to convert fahrenheit to celsius

        // This is the output statement to tell the user what their result is from the fahrenheit to celsius conversion
        let outputParagraph = document.getElementById("output");
        outputParagraph.textContent = `${fahrenheit}° fahrenheit converted to celsius is ${celsius}°`

        console.log(userInput);
}

    function celsiusConversion(){     // This function known as celsius conversion calls the process of converting celsius to fahrenheit 
        
        console.log("celsiusConversion was called");

        // This gets the celsius number from the user input
        let celsiusInput = document.getElementById("Celsius").value;
        let Celsius = parseFloat(celsiusInput);  // Converts the string input into a number

        let Fahrenheit = ((Celsius * 1.8) + 32);   // This is the formula to convert celsius to fahrenheit 

        // This is the output statement to tell the user what the result is from the celsius to fahrenheit conversion
        let reverseParagraph = document.getElementById("reverse"); 
        reverseParagraph.textContent = `${Celsius}° celsius converted to fahrenheit is ${Fahrenheit}°`

        console.log(userInput);
}