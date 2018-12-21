const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connected to MonogoDB server.')
  const db = client.db('TodoApp');

  // findOneAndUpdate
  db.collection("Todos").findOneAndUpdate({
    _id: new ObjectID("5c1c2b54a4efa1178872f82a")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //client.close();
});
