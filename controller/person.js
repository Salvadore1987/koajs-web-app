const personService = require('../service/person');
const personModel = require('../model/person');

const contentType = {"Content-Type": "application/json"};

const personList = [
    {"id": 1, "name": "Eldar", "surname": "Sagitov", "age": 31},
    {"id": 2, "name": "Daniya", "surname": "Sagitova", "age": 29},
    {"id": 3, "name": "Sevilya", "surname": "Sagitova", "age": 6},
    {"id": 4, "name": "Basir", "surname": "Sagitov", "age": 2},
    {"id": 5, "name": "Elzara", "surname": "Sagitova", "age": 1},
];

module.exports = {
    findById: async (ctx) => {
        ctx.headers = contentType;
        ctx.body = personList.filter(value => value.id == ctx.params.id).map(value => value);
    },
    findAll: async (ctx) => {
        ctx.headers = contentType;
        ctx.body = personList;
    },
    save: async (ctx) => {        
        try {
            ctx.headers = contentType;
            ctx.body = personService.save(personModel.Person(ctx.request.body));
        } catch (e) {
            console.log(e);
            ctx.body = {};
        }        
    }
}