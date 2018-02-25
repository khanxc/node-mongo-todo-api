//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  //findOneUpdate

  // db.collection('Todos').findOneAndUpdate(
  //   { _id: new ObjectID('5a929ea40d0bb124d2ded9c2')
  //   },{
  //     $set: {
  //       completed: true
  //     }
  //   },{
  //     returnOriginal: false
  //   }  ).then((res) => {
  //     console.log(res);
  //   });


db.collection('Users').findOneAndUpdate(
  {
    _id: new ObjectID('5a92968d081fcfe025855aae')
  },
  {
    $inc:{
      age:1
    },
    $set: {name:'khan'}
  }, {
    returnOriginal: false
  }).then((res) => {

    console.log(res);
  })



  //client.close();
});
