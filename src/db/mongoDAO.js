var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var me = this;
// Connection URL
var url = require('../../botsecrets.json').mongoURI;

exports.isAdmin = function(user){
    console.log('findAdmin');

    var result = MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      db.collection('Users').find({
        $and: [
          {'username': user},
          {'role': 'admin'}
        ]
      }).toArray(function(err, result) {
        if(err) throw err;
        console.log("return results " + result);
        return result;
      })
      db.close;
    });
    console.log("results: "+ result)
    if (result){
      console.log(user + " has logged in.")
      return true;
    }
    return false;
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
