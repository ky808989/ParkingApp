const assert = require('assert');
const User = require('../../src/models/user');

describe('Deleting a user', () => {
    let joe;
    beforeEach((done) => {
        joe = new User({user_name: 'Joe'});
        joe.save()
        .then( ()=> done());
    });

    it('model instance remove', (done) => {
        joe.remove()
        .then(() => 
            User.findOne({user_name:'Joe'})
        ).then( (user)=>{
            assert(user=== null);
            done();
        });
    });

    it('class method remove', (done) => {
        //Remove a bunch of records with some given criteria
        User.remove({user_name:'Joe'})
        .then(() => 
            User.findOne({user_name:'Joe'})
        ).then( (user)=>{
            assert(user=== null);
            done();
        });
    });

    it('class method findOneAndRemove', (done) => {
        User.findOneAndRemove({user_name:'Joe'})
        .then(() => 
            User.findOne({user_name:'Joe'})
        ).then( (user)=>{
            assert(user=== null);
            done();
    });
    });
    it('class method findByIdAndRemove', (done) => {
        User.findByIdAndRemove(joe._id)
        .then(() => 
            User.findOne({user_name:'Joe'})
        ).then( (user)=>{
            assert(user=== null);
            done();
    });
        
    });
});