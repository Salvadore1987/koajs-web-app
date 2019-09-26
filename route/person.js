const Router = require('koa-router');
const parser = require('koa-bodyparser');
const router = new Router({
    prefix: "/persons"
});
const personModel = require('../model/person');
const personService = require('../service/person');
const personController = require('../controller/person');

router
    .get('/:id', async (ctx, next) => {
        personController.findById(ctx);
    })
    .get('/', async (ctx, next) => {        
        personController.findAll(ctx);
    })
    .post('/', parser(), async (ctx, next) => {
        personController.save(ctx);
    });

module.exports = {
    routes: () => {
        return router.routes();
    },
    allowedMethods: () => {
        return router.allowedMethods();
    }
}