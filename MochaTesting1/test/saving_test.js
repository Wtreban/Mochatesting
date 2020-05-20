const mocha = require('mocha');
const assert = require('assert');
const marioChar = require('../models/mariochar');

describe('Saving records', function(){
    it('Saves a record to the database', function(done){

        var char = new marioChar({
            name:'Mario',
            weight:50
        });
        char.save().then(function(){
            assert(char.isNew===false);
            done();
        });

    });
});