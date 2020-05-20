const mocha = require('mocha');
const assert = require('assert');
const marioChar = require('../models/mariochar');

describe('Deleting records', function(){
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
    it('Deletes one record from the database', function(done){
       marioChar.findOneAndRemove({name:'Mario'}).then(function(){
            marioChar.findOne({name:'Mario'}).then(function(result){
                assert(result === null);
                done();
            })
       })
    });
});