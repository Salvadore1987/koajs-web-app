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

app.use(logger());
app.use(person.routes());
app.use(person.allowedMethods());

app.listen(options.port, options.hostname, () => {
    console.log(`Application running on http://${options.hostname}:${options.port}/`);
});