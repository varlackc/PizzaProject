$.getJSON('http://files.olo.com/pizzas.json', function(data) { // data is the Json String

    //declare a toppings array
    var toppingsArray = new Array();
    data.forEach(element => {
        //write in console
        //console.log(element.toppings);

        // if the topping is not in the list then add

        if (!(toppingsArray.includes(element.toppings))) {
            toppingsArray.push({ "Topping": element.toppings, "Count": 1 });
            //console.log("Added " + element.toppings);
        }

        //write on browser
        //document.writeln(element.toppings + " ");
    });

    toppingsArray.forEach(element => {
        console.log("Topping: " + element.Topping + " Count: " + element.Count);
    });
});