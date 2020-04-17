const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database');

const app = express();

// promises have two functions: then and catch
// can use this since we called the promise method when exporting in database.js
// these functions can be chained
// promise is a JS object available in Node and the browser
// db.execute('SELECT * FROM products')
//     .then(result => {
//         console.log(result);
//     })
//     // function that executes in case of an error
//     .catch(err => {
//         console.log(err);
//     });

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);


