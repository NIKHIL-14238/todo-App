
// this file basically is a EXPRESS CODE FILE -->> WHERE WE HAVE ALL THE ROUTES FOR THE POSTMAN 
const express = require("express");
const {createtodo,updatetodo} = require("./types");
const app = express();
const {todo} = require("./db");
const cors = require("cors");
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.post('/puting',async function(req,res){
const createPayLoad = req.body ;
const parsedPayLoad = createtodo.safeParse(createPayLoad);
 if(!parsedPayLoad.success)
    {
    res.status(411).json({mssg : "you sent the wrong inputs"})
    return ; 
    }
    // put the postman body data to mongodb
    await todo.create({
        title: createPayLoad.title,
        description : createPayLoad.description,
        completed : false 
    })
    res.json({mssg : " to do created succesfully"})

});
app.get('/geting',async function(req,res){
    const todos = await todo.find();
    res.json({
        todos
    })

});
app.put('/completed', async  function(req,res){
    const updatePayLoad = req.body;
    const parsedPayLoadtwo = updatetodo.safeParse(updatePayLoad);
    if(!parsedPayLoadtwo.success)
    {
        res.status(411).json({
            mssg : "you sent the wrong inputs",
        })
        return ;
    }
    await todo.updateOne({_id:req.body._id},{completed:true})
    res.json({mssg:"todo is marked successfully"})
});
app.listen(port,()=>{console.log(`the port is running on http://localhost:${port}`)});
