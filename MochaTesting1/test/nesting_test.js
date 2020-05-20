const assert = require('assert');
const mongoose = require('mongoose');
const author = require('../models/author');


describe('Nesting records', function(){
    
    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            done();
        })
    })

    it('Create an author with sub-documents', function(done){
        var pat = new author({
            name: 'Patric Rothfuss',
            books:[{
                title:'Name of the Wind',
                pages: 400
            }]
        })
        pat.save().then(function(){
            author.findOne({name:'Patric Rothfuss'}).then(function(result){
                assert(result.books.length === 1);
                done();
            })
        })
    })

    it('Adds a book to an author', function(done){
        var pat = new author({
            name: 'Patric Rothfuss',
            books:[{title:'Name of the Wind',pages: 400}]
        }) 

        pat.save().then(function(){
            author.findOne({name:'Patric Rothfuss'}).then(function(result){
                result.books.push({title:"Wise Man's Fear", pages:500});
                result.save().then(function(){
                    author.findOne({name:'Patric Rothfuss'}).then(function(result){
                        assert(result.books.length ===2);
                        done();
                    })
                })
            })
        })
    })
})