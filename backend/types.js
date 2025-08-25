// THIS FILE IS A INPUT VALIDATION FILE ---> WHERE WE USE ZOD LIBRARY 
const zod = require("zod");


const createtodo = zod.object({
        title : zod.string(),
        description : zod.string()
    })

const updatetodo = zod.object({
    _id : zod.string()
})
// ab bana todiya hh lekin is od ki validation ko export kaise karenge taki bahar ham 
//input validation kar paye using zod
module.exports =
{
    createtodo : createtodo,
    updatetodo : updatetodo
}