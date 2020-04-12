const productsData = [
    {
        "FirstName" : "Noureddine",
        "LastName" : "Nafzaoui",
        "Email" : "nafzaouinourdine@gmail.com",
        "Product" : "PlayStation 4",
        "ProductType" : "Console",
        "Price" : 4000
    },
    {
        "FirstName" : "Ahmed",
        "LastName" : "Nafzaoui",
        "Email" : "nafzaouinourdine@gmail.com",
        "Product" : "The last of us",
        "ProductType" : "Game",
        "Price" : 1000
    }
];
document.getElementById("app").innerHTML = `<h1>We have (${productsData.length} Products available)</h1>`
