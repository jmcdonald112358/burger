const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const expHBS = require('express-handlebars');

app.engine('.hbs', expHBS({
   defaultLayout: 'main',
   extname: '.hbs'
}))

app.set('view engine', 'hbs');

const routes = require('./controllers/controller.js');
app.use(routes);

app.listen(port, () => {
   console.log('Listening on port ' + port);
});