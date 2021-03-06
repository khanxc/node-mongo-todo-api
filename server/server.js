
const {ObjectID} = require('mongodb');
var express = require('express');
var bodyparser = require('body-parser');


var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var{User} = require('./models/user.js');

var app = express();


app.use(bodyparser.json());


app.post('/todos',(req,res) => {

  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=> {

    res.send(doc);
  }, (err)=> {
    res.status(400).send(err);
  });

});

app.get('/todos',(req,res) => {

  Todo.find().then((todos) => {

    res.send({todos});

  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos/:id',(req,res) => {

  var id = req.params.id ;

  if(!ObjectID.isValid(id)) {

    res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      res.status(404).send({'message': 'No todo list found for that id'});
    }
    res.status(200).send(todo);

  },(e) => {
    res.status(400).send();
  });


});

app.listen(3000, () => {

  console.log('Started on port 3000');
})

module.exports = {app};
