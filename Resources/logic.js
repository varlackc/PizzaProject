$.getJSON('http://files.olo.com/pizzas.json', function(data) { // data is the Json String

    //declare a toppings array
    var toppingsArray = new Array();
    var countArray = new Array();
    var objectIndex = 0;
    data.forEach(element => {
        //write in console
        //console.log(element.toppings);

        // if the topping is not in the list then add the element
        if (!(toppingsArray.includes(element.toppings))) {
            toppingsArray.push(element.toppings);
            countArray.push(1);
            //console.log("Added " + element.toppings);
        } else {
            objectIndex = toppingsArray.indexOf(element.toppings);
            countArray[objectIndex] += 1;
        }

        //write on browser
        //document.writeln(element.toppings + " ");
    });

    for (var i = 0; i < toppingsArray.length; i++) {
        console.log("The Toping " + toppingsArray[i] + " has a count of " + countArray[i]);
    }
    /*
    toppingsArray.forEach(element => {
        console.log("Topping: " + element.Topping + " Count: " + element.Count);
    });
    */
});