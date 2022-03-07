// const mongodb = require('mongodb');
// const mongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (err, client) => {
     if (err) {
          return console.log('Unable to connect to database!');
     }

     const db = client.db(databaseName)

     // db.collection('users').findOne({age: 21}, (err, user)=>{
     //      if (err) {
     //           return console.log("Unable to fetch");
     //      }
     //      return console.log(user)
     // });
     
     // db.collection('users').find({age: 21}).toArray((err, users)=>{
     //      if (err) {
     //           return console.log("Unable to fetch")
     //      }
     //      return console.log(users)
     // })

     // db.collection('tasks').findOne({_id: new ObjectID("6225f6f412e1d539df26ed34")}, (err, task)=>{
     //      console.log(task);
     // })

     // db.collection('tasks').find({completed: true}).toArray((err, tasks)=>{
     //      console.log(tasks);
     // })

     // db.collection('users').updateOne({
     //      _id: new ObjectID("6225fbc086f7d17c90bf667b")
     // }, {
     //      // $set:{name: "Yahya"}
     //      $inc:{age: 1}
     // }).then((result)=>{
     //      console.log(result);
     // }).catch((error)=>{
     //      console.log(error);
     // })

     // db.collection('tasks').updateMany({completed: false}, {$set:{
     //      completed: true
     // }}).then((result)=>{
     //      console.log(result);
     // }).catch((error)=>{
     //      console.log(error);
     // })

     // db.collection('users')
     //      .deleteMany({age: {$gt: 25}})
     //      .then((result)=>{
     //           console.log(result);
     //      })
     //      .catch((error)=>{
     //           console.log(error);
     //      })





     console.log('Connected to database successfully!');
})