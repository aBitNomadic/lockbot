var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = require('../../botsecrets.json').mongoURI;

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to mongodb server");
  console.log("DB Init");



  // db.collection('users').insertMany([
  //   {
  //     "Username": "sleepy",
  //     "role": "user"
  //   },
  //   {
  //     "Username": "aBitNomadic",
  //     "role": "admin"
  //   }
  // ], function (err, r){
  //   assert.equal(null, err);
  //   assert.equal(2, r.insertedCount);
  // });
  db.close();
});
