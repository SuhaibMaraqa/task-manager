const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager'

mongoClient.connect(connectionURL, {useNewUrlParser: true}, (err, client) => {
     if (err) {
          return console.log('Unable to connect to database!');
     }

     const db = client.db(databaseName)

     // db.collection('users').insertOne({
     //      name: 'Suhaib',
     //      age: 21
     // })

     db.collection('tasks').insertMany([
          {
               description: 'wake up',
               completed: true
          }, {
               description: 'eat',
               completed: true
          }, {
               description: 'sleep',
               completed: false
          }
     ], (err, result)=>{
          if (err) {
               return console.log("Unable to insert to tasks collection");
          } else {
               console.log(result);
          }
     })
     console.log('Connected to database successfully!');
})