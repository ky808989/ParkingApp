const assert = require('assert');
const User = require('../../src/models/user');

describe('Reading users out of the databse', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({user_name: 'Joe'});
        joe.save()
        .then( ()=> done());
    });
    it('finds all users with a name of joe',(done) => {
        User.find({user_name:'Joe'})
        .then( (users) => {
            // in compare, object(_id) not equal to _id string
            assert(users[0]._id.toString()===joe._id.toString());
            done();
        });
    });
    it('find a user with a particular id', (done) => {
        User.findOne({ _id:joe._id })
        .then( (user) => {
            assert(user.user_name === 'Joe');
            done();
        });
    });
});