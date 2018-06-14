const express = require('express');
const someController = require('./controllers/some-controller');
const anotherController = require('./controllers/another-controller');

// Initializes a barebones express app
const app = new express();


// Declares a GET endpoint
// visiting http://localhost:5555/ in the browser will trigger this code
app.get('/', (req, res) => {
	res.send('Hello 👋');
});

// For more complex routes, you can move the code to a separate file
// visiting http://localhost:5555/some-route in the browser will trigger this code
app.get('/some-route', someController);

// Declares a POST endpoint
// This can be used to send data (a payload)
// Cannot be accessed via the browser
// You must use Postman or equivalent to call this endpoint
app.post('/another-route', anotherController);

// Heroku will assign a random port in the PORT environment variable
// When running locally, it will use 5555
// The app will be running to http://localhost:5555
const port = process.env.PORT || 5555;

app.listen(port, () => {
	console.log('app listening on', port);
});
