const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;

before(function(done){
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error',function(error){
        console.log('Connection error: ', error);
    })
})

beforeEach(function(done){
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
})