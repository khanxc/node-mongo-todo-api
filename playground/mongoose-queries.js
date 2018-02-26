
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const{User} = require('./../server/models/user.js');

var id = '5a92e90ff3a1e7ef78cce7f7';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }


User.findById(id).then((user) => {

  if(!user) {
    return console.log('user not found');
  }
  console.log('user found ==>',user);
}, (e) => {
  console.log(e);
})


// Todo.find({
//
//   _id: id
// }).then((todos) => {
//
//   console.log('Todos', todos);
// });
//
//
// Todo.findOne({
//
//   _id: id
// }).then((todo) => {
//
//   console.log('Todos', todo);
// });


// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id ', todo);
// }).catch((e) => {
//   console.log(e);
// });
