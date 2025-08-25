// THIS IS A DATABASE FILE --> FOR THE MONGO DB 
const mongoose  = require("mongoose");
// .env
mongoose.connect(process.env.MONGO_URI);

const todoSchema =  mongoose.Schema({

    title: String ,
    description : String , 
    completed: Boolean
});
const todo = mongoose.model('todos' , todoSchema);

module.exports ={
    todo 
}

