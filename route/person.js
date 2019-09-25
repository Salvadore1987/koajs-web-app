const Router = require('koa-router');
const parser = require('koa-bodyparser');
const router = new Router({
    prefix: "/persons"
});
const personModel = require('../model/person');

const contentType = {"Content-Type": "application/json"};

const personList = [
    {"id": 1, "name": "Eldar", "surname": "Sagitov", "age": 31},
    {"id": 2, "name": "Daniya", "surname": "Sagitova", "age": 29},
    {"id": 3, "name": "Sevilya", "surname": "Sagitova", "age": 6},
    {"id": 4, "name": "Basir", "surname": "Sagitov", "age": 2},
    {"id": 5, "name": "Elzara", "surname": "Sagitova", "age": 1},
];

router
    .get('/:id', async (ctx, next) => {
        ctx.headers = contentType;
        console.log(ctx.params.id);
        ctx.body = personList.filter(value => value.id == ctx.params.id).map(value => value);
    })
    .get('/', async (ctx, next) => {
        let person = personModel.Person({
            name: "John",
            surname: "Doe",
            age: 30
        });
        console.log(person);
        ctx.headers = contentType;
        ctx.body = personList;
    })
    .post('/', parser(), async (ctx, next) => {
        ctx.headers = contentType;
        ctx.body = ctx.request.body;
    });

module.exports = {
    routes: () => {
        return router.routes();
    },
    allowedMethods: () => {
        return router.allowedMethods();
    }
}