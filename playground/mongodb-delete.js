//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  //delete many

  db.collection('Users').deleteMany({
    name:'khan'
}).then((result) => {
  console.log(result);

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a92849df1d1f1def6b5c42f') }).then((result) => {

    console.log(result);
  });

});

  //delete insertOne

  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=> {
  //   console.log(result);
  // });

  //find one and delete




  //client.close();
});
