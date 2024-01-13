const express = require('express');
const bodyParser = require('body-parser');

const authorRouter = express.Router();
authorRouter.use(bodyParser.json());

authorRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type',  'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the authors to you!');
    })
    .post((req, res, next) => {
        res.write('id: ' + req.body.id + '\n');
        res.write('name: ' + req.body.name + '\n');
        res.write('birthYear: ' + req.body.birthYear + '\n');
        res.end('country: ' + req.body.country);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /author');
    })
    .delete((req, res, next) => {
        res.end('Deleting all authors');
    });

    authorRouter.route('/:authorId')
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /author/'+ req.params.authorId);
    })
    .get((req, res, next) => {
        res.end('Will send details of the author: ' + req.params.authorId +' to you!');
    })
    .put((req, res, next) => {
        res.write('Updating the author: '+ req.params.authorId + '\n');
        res.write('id: ' + req.body.id + '\n');
        res.write('name: ' + req.body.name + '\n');
        res.write('birthYear: ' + req.body.birthYear + '\n');
        res.end('country: ' + req.body.country + '\n');
    })
    .delete((req, res, next) => {
        res.end('Deleting author: ' + req.params.authorId);
    });

    module.exports = authorRouter;