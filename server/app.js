const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const someController = require('./controllers/some-controller');
const anotherController = require('./controllers/another-controller');

// James' controllers
const getWorldCupResult = require('./controllers/get-world-cup-result-controller');
const postWorldCupResult = require('./controllers/post-world-cup-result-controller');

// Initializes a barebones express app
const app = new express();

// Set paths for views
// https://www.npmjs.com/package/path
app.set('views', path.join(__dirname, '/views'));

// Sets up Handlebars for templating
// https://github.com/ericf/express-handlebars
app.engine('hbs', handlebars({
		defaultLayout: 'main',
		extname: '.hbs',
		layoutsDir: path.join(__dirname, 'views/layouts/')
	}
));
app.set('view engine', 'hbs');

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

// Heroku will assign a random port in the PORT environment variable
// When running locally, it will use 5555
// The app will be running to http://localhost:5555
const port = process.env.PORT || 5555;

app.listen(port, () => {
	console.log('app listening on', port);
});
