$.getJSON('http://files.olo.com/pizzas.json', function(data) {
    //data is the JSON string
    data.forEach(element => {
        console.log(element);
    });
});