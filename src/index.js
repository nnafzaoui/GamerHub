// const express = require('express');
// const morgan = require('morgan');
// const path = require('path');

// const app = express();
// //database
// const products = [
//     {
//         "FirstName" : "Noureddine",
//         "LastName" : "Nafzaoui",
//         "Email" : "nafzaouinourdine@gmail.com",
//         "Product" : "PlayStation 4",
//         "ProductType" : "Console",
//         "Price" : 4000
//     },
//     {
//         "FirstName" : "Ahmed",
//         "LastName" : "Nafzaoui",
//         "Email" : "nafzaouinourdine@gmail.com",
//         "Product" : "The last of us",
//         "ProductType" : "Game",
//         "Price" : 1000
//     },
//     {
//         "FirstName" : "Noureddine",
//         "LastName" : "Nafzaoui",
//         "Email" : "nafzaouinourdine@gmail.com",
//         "Product" : "PlayStation 4",
//         "ProductType" : "Console",
//         "Price" : 4000
//     }
// ];
// //settings
// app.set('port', process.env.PORT || 3000)

// // middleware
// app.use(morgan('dev'));
// app.use(express.urlencoded({extended: false})); 
// app.use(express.json());
// //routes
// app.get('/products', (req, res) => {
//     res.json(products);
// });

// app.post('/products',(req, res) => {
//     const { FirstName, LastName, Email, Product, ProductType, Price } = req.body;
//     products.push({
//         FirstName,
//         LastName,
//         Email,
//         Product,
//         ProductType,
//         Price
//     });
//     res.json('successfully created');
// });

// app.put('/products/:FN', (req, res) => {
//     const { FN } = req.params;
//     const { PR } = req.body;

//     products.forEach((product) => {
//         if (product.FirstName == FN) {
//         product.Product = PR;
//         }
//     })
//     console.log(req.params, req.body);
//     res.json('succesfully updated');
// })
// app.delete('/products/:FN', (req, res) =>{
//     const { FN } = req.params;
//     products.forEach((product, i) => {
//         if (product.FirstName == FN) {
//             products.splice(i, 1);
//         }
//     });

//     res.json('successfully deleted')
// });

// //static files
// app.use(express.static(path.join(__dirname, 'public')));

// app.listen(app.get('port'), () => {
//     console.log(`server on port ${app.get('port')}`);
// });

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api/products', require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
