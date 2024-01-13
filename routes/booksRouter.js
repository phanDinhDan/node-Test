const express = require('express');
const bodyParser = require('body-parser');

const booksRouter = express.Router();
booksRouter.use(bodyParser.json());

booksRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type',  'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the books to you!');
    })
    .post((req, res, next) => {
        res.write('isbn: ' + req.body.isbn + '\n');
        res.write('title: ' + req.body.title + '\n');
        res.write('subTitle: ' + req.body.subTitle + '\n');
        res.write('publish_date: ' + req.body.publish_date + '\n');
        res.write('publisher: ' + req.body.publisher + '\n');
        res.write('pages: ' + req.body.pages + '\n');
        res.write('description: ' + req.body.description + '\n');
        res.end('website: ' + req.body.website);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /book');
    })
    .delete((req, res, next) => {
        res.end('Deleting all books');
    });

    booksRouter.route('/:booksId')
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /book/'+ req.params.booksId);
    })
    .get((req, res, next) => {
        res.end('Will send details of the book: ' + req.params.booksId +' to you!');
    })
    .put((req, res, next) => {
        res.write('Updating the book: '+ req.params.booksId + '\n');
        res.write('isbn: ' + req.body.isbn + '\n');
        res.write('title: ' + req.body.title + '\n');
        res.write('subTitle: ' + req.body.subTitle + '\n');
        res.write('publish_date: ' + req.body.publish_date + '\n');
        res.write('publisher: ' + req.body.publisher + '\n');
        res.write('pages: ' + req.body.pages + '\n');
        res.write('description: ' + req.body.description + '\n');
        res.end('website: ' + req.body.website);
    })
    .delete((req, res, next) => {
        res.end('Deleting book: ' + req.params.booksId);
    });

    module.exports = booksRouter;