*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  In the HTML, have one input field where someone can enter
  in a temperature. Then have a radio button group where
  Celsius or Fahrenheit can be selected as the scale that the
  number should be converted to. Then a button that,
  when clicked, displays the converted.
*/



function toCelsius (temp) {
  return Math.round((temp - 32)/1.8)//Celsius = (5/9) * (Fahrenheit – 32)

}

function toFahrenheit (temp) {
  return Math.round((temp Fahrenheit = (9/5) * Celsius + 32

}


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (e) {
  var userTemperature = document.getElementsByName("conversion_type"
  for (var i= 0: i < optionChosen.length; i++);
    var button = document.getElementById("converter");
  //need to figure out how to see which box is checked?//

  

  // This will actually return an array containing both of the radio buttons
  // so you will need to look at each item in the array and see if the 'checked'
  // property is true (sample code provided)
  var optionChosen = document.getElementsByName("conversion_type");

  // for loop
    if (optionChosen.checked && optionChosen.value === 'celsius') {
      toCelsius ()//calls the function//

    }

    if (optionChosen.checked && optionChosen.value === 'fahrenheit') {
      toFahrenheit()//calls the function//

    }
  // end for loop
}

function clearTemp (){
  userTemperature.value = "";
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
button.onclick = determineConverter;