const Koa = require('koa');
const Router = require('koa-router');
//const parser = require('koa-bodyparser');
const logger = require('koa-logger');
const app = new Koa();
const person = require('./route/person');

const options = {
    hostname: 'localhost',
    port: 3000
};

const personList = [
    {"id": 1, "name": "Eldar", "surname": "Sagitov", "age": 31},
    {"id": 2, "name": "Daniya", "surname": "Sagitova", "age": 29},
    {"id": 3, "name": "Sevilya", "surname": "Sagitova", "age": 6},
    {"id": 4, "name": "Basir", "surname": "Sagitov", "age": 2},
    {"id": 5, "name": "Elzara", "surname": "Sagitova", "age": 1},
];

const contentType = {"Content-Type": "application/json"};

app.use(logger());
//app.use(parser());
app.use(person.routes());
app.use(person.allowedMethods());

app.listen(options.port, options.hostname, () => {
    console.log(`Application running on http://${options.hostname}:${options.port}/`);
});