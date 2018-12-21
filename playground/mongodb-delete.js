const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connected to MonogoDB server.')
  const db = client.db('TodoApp');

  // delete many
  // db.collection('Todos').deleteMany({text:"Eat Dinner"}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text:"Eat Dinner"}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });

  db.collection('Users').deleteMany({name: "Akshdeep"}).then((result) => {
    console.log(result);
  });

  db.collection('Users').delteOne({_id: new ObjectID("5c1b1338841ff9058c9d6e1b")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2))
  });
  //client.close();
});
