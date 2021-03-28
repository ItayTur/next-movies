'use strict';
const express = require('express');
const path = require('path');
const logger = require('morgan');
const movies = require('./movies.json');

const app = express();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/movies', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const { search = '', limit = movies.length, skip = 0 } = req.query;
    let moviesToSend = [...movies];

    if (search) {
        moviesToSend = moviesToSend.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
    }
    
    res.send(moviesToSend.slice(skip, Number(skip) + Number(limit)));
});

app.get('/movies/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send(movies.filter(movie => movie.id === req.params.id));
});

app.listen(3001, function () {
    console.log(`app listening on port ${3001}!`);
});

module.exports = app;
