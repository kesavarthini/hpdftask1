var express = require("express");
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'
import TwitterComponent from './TwitterComponent.js'
const app = express();

app.set('views', __dirname + '/views')
app.use('/', express.static(__dirname + '/public/'))
app.set('port', (process.env.PORT || 3000))

app.get('/index.html',(req, res) => {
	const reactMarkup = ReactDOMServer.renderToStaticMarkup(<TwitterComponent />)

    res.locals.reactMarkup = reactMarkup

    res.status(200).render('views/index.html')
});

app.listen(app.get('port'))