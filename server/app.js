const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongodb = require('./libs/mongodb');
require('dotenv').config();

const someController = require('./controllers/some-controller');
const anotherController = require('./controllers/another-controller');

// James' controllers
const getWorldCupResult = require('./controllers/get-world-cup-result-controller');
const postWorldCupResult = require('./controllers/post-world-cup-result-controller');
// Form controllers
const getForm = require('./controllers/get-form-controller');
const postForm = require('./controllers/post-form-controller');

// FT API Controllers
const getHeadlines = require('./controllers/get-ft-headlines');

// Initializes a barebones express app
const app = new express();

// Sets up Handlebars for templating
// https://github.com/ericf/express-handlebars
const handlebarsInstance = handlebars.create({ 
	extname: '.html',
	defaultLayout: 'main'

});
app.engine('html', handlebarsInstance.engine);
app.set('view engine', '.html');

// Static files
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

// Declares a GET endpoint
// visiting http://localhost:5555/ in the browser will trigger this code
app.get('/', (req, res) => {
	res.render('home', {
		title: 'Home',
		pageTitle: 'Hello 👋' 
	});
});

// For more complex routes, you can move the code to a separate file
// visiting http://localhost:5555/some-route in the browser will trigger this code
app.get('/some-route', someController);

// Declares a POST endpoint
// This can be used to send data (a payload)
// Cannot be accessed via the browser
// You must use Postman or equivalent to call this endpoint
app.post('/another-route', anotherController);

// James' endpoints
app.get('/world-cup-result', getWorldCupResult);
app.post('/world-cup-score', postWorldCupResult);
// Form
app.get('/form', getForm);
app.post('/form-submit', postForm);

// FT API
app.get('/headlines', getHeadlines);

// Heroku will assign a random port in the PORT environment variable
// When running locally, it will use 5555
// The app will be running to http://localhost:5555
const port = process.env.PORT || 5555;

const watch = mongodb
	.then(() => {
		app.listen(port, () => {
			console.log('\n App listening on port:', port, '\n');
		});
	}).catch(error => {
		throw new Error(error);
	});
module.exports = { watch };
