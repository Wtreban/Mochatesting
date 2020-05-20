const mocha = require('mocha');
const assert = require('assert');
const marioChar = require('../models/mariochar');

describe('Finding records', function(){
    var char;

    beforeEach(function(done){
            char = new marioChar({
            name:'Mario',
            weight:50
        });
        char.save().then(function(){
            done();
        });
    })
    it('Finds one record from the database', function(done){
       marioChar.findOne({name: 'Mario'}).then(function(result){
            assert(result.name === 'Mario');
            done();
       })
    });

    it('Finds one record by ID from the database', function(done){
        marioChar.findOne({_id: char._id}).then(function(result){
             assert(result.id.toString() === char._id.toString());
             done();
        })
     });
});