/*
Program: Pizza Toppings Rater
Author: Carlos Maxwell Varlack
Description: This program takes a JSON file from an API
The JSON file contains a list of Pizza topings. 
The application creates a list of the 20 most popular 
toppings. 
*/

// Get the Json data of the different pizza toppings
$.getJSON('http://files.olo.com/pizzas.json', function(data) {
    //declare variables and arrays
    var topping;
    var word;
    var counts = {};
    var keys = [];
    var listLength = 20;
    const content = document.getElementById("pizzaToppings");

    // loop through the json objects
    data.forEach(item => {
        word = item.toppings;
        //loop a second time to get the individual components in the order
        word.forEach(unit => {
            //get current topping
            topping = unit.toLowerCase();
            //check if the current topping is new
            if (counts[topping] === undefined) {
                counts[topping] = 1; // set the initial count to one
                keys.push(topping); // add new key word to the keys array
            } else {
                counts[topping] += 1; //increment by one
            }
        });
    });

    //sort the keys array data
    function comparison(first, second) {
        var firstCount = counts[first];
        var secondCount = counts[second];
        return secondCount - firstCount;
    }
    keys.sort(comparison);

    // load the content to the screen
    showContent();

    //loop through the array to show data
    for (var i = 0; i < listLength; i++) {
        var key = keys[i]; // create individual key from the key array

        // add table elements to the page
        document.writeln("<tr><td> " + (i + 1) + "</td> <td>" + key + "</td> <td>" + counts[key] +
            "</td></tr>");
    }
    //close the table tags
    document.write("</tbody></table>");
});

// This function shows the content on the HTML file
function showContent() {
    var content = "<h2>This Application Shows The Most Popular Toppings</h2>";
    content += '<table class="table"><thead><tr><th scope="col">#</th scope ="col"><th scope="col">Topping</th><th scope="col">Count</th></tr></thead>';
    content += "<tbody>";
    document.write(content);
}