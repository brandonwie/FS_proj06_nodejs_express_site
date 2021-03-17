const express = require('express');

// launch Express
const app = express();
app.use(express.urlencoded({ extended: false }));

// set static path
app.use('/static', express.static('public'));
// set view engine to Pug
app.set('view engine', 'pug');

const mainRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/projects');

app.use(mainRoute);
app.use('/about', aboutRoute);
app.use('/projects', projectRoute);

// Error
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});

app.listen(3000, () => {
	console.log('App listening on port 3000...');
});
