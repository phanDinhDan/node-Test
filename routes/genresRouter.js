const express = require('express');
const bodyParser = require('body-parser');

const genresRouter = express.Router();
genresRouter.use(bodyParser.json());

genresRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type',  'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the genres to you!');
    })
    .post((req, res, next) => {
        res.write('Id: ' + req.body.id + '\n');
        res.end('name: ' + req.body.name);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /genre');
    })
    .delete((req, res, next) => {
        res.end('Deleting all genres');
    });

    genresRouter.route('/:genresId')
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /genre/'+ req.params.genresId);
    })
    .get((req, res, next) => {
        res.end('Will send details of the dish: ' + req.params.genresId +' to you!');
    })
    .put((req, res, next) => {
        res.write('Updating the dish: '+ req.params.genresId + '\n');
        res.write('Id: ' + req.body.id + '\n');
        res.end('Name: ' + req.body.name);
    })
    .delete((req, res, next) => {
        res.end('Deleting dish: ' + req.params.genresId);
    });

    module.exports = genresRouter;