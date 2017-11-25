var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = require('../../botsecrets.json').mongoURI;

exports.isAdmin = function(user){
    console.log('findAdmin');

    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      db.collection('Users').find({
        $and: [
          {'username': user},
          {'role': 'admin'}
        ]
      }).toArray(function(err, result) {
        if(err){
          console.log(err);
          throw err;
        };
        if(result){
          console.log(user + " found for login in DB!")
          return true;
        } else {
          console.log(user + " not found for login!")
          return false;
        }
      })
    });
  };

  exports.addStatment = function(kword, stmt){
    console.log('addStatment');

    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);

      db.collection('statments').insertOne({
        keyword: kword,
        statment: stmt
      }, function(err, r){
        assert.equal(null, err);
        assert.equal(1, r.insertedCount);
      });

    });
  }
