const express = require('express');
const app = express();
app.use(express.json());
const Joi =require('joi');
 
const courses=[
            { id:1, name:' c1'},
            { id:2, name:'c2'},
            { id:3, name:'c3'},
   
             ];   

app.get('/',(req,res)=>{
    console.log('hello');
        res.send("hello world");
});

app.get('/api/courses',(req,res) => { 
    res.send(courses);
});

 app.post('/api/courses/',(req,res)=>{
    // const { error} = validateCourse(req.body);
    //   if(error){
    //     res.status(400).send(error.details[0].message);
    //     return;
    // }
    const cours={
        id:courses.length + 1,
        name:req.body.name
    };
    courses.push(cours);
    res.send(cours);

}); 


app.get('/api/courses/:id',(req,res)=>{
    console.log(res);
 const cours =  courses.find(c => c.id === parseInt( req.params.id));
  if(!cours) res.status(404).send("not found");
  res.send(cours);
});

app.put('/api/courses/:id',(req,res)=>{
    const cours =  courses.find(c => c.id === parseInt( req.params.id));
    if(!cours) res.status(404).send("not found"); 

    // const result=validateCourse(req.body);

    // const { error} =validateCourse(req.body);

    //   if(error){
    //     res.status(400).send(error.details[0].message);
    //     return;
    // }
    cours.name=req.body.name;
    res.send(cours);
});

app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!courses) res.status(404).send('id not found');
    res.send(course);
});

// function validateCourse(course){
//     const schema = {
//         name: Joi.string().min(3).required()
//     };
//       const result = Joi.validate(course,schema);
// }

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listening on port ${port}`));
