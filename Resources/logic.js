// Get the Json data
$.getJSON('http://files.olo.com/pizzas.json', function(data) {
    //declare variables
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

    //sort the keys array
    function comparison(first, second) {
        var firstCount = counts[first];
        var secondCount = counts[second];
        return secondCount - firstCount;
    }
    keys.sort(comparison);

    //create the DOM element 
    var DomObject = document.getElementById("pizzaToppings");

    // load the content
    showContent();

    //loop through the array to show data
    for (var i = 0; i < listLength; i++) {
        var key = keys[i]; // create individual key from the key array

        // add elements to the page
        document.writeln("<tr><td> " + (i + 1) + "</td> <td>" + key + "</td> <td>" + counts[key] +
            "</td></tr>");
    }
    //close the table
    document.write("</tbody></table>");
});

function showContent() {
    var content = "<h2>This Application Shows The Most Popular Toppings</h2>";
    content += '<table class="table"><thead><tr><th scope="col">#</th scope ="col"><th scope="col">Topping</th><th scope="col">Count</th></tr></thead>';
    content += "<tbody>";
    document.write(content);
}