const assert = require('assert');
const User = require('../../src/models/user');

describe('',(done)=> 'string');
(done) => {
    done.net
}

describe('Creating records', () => { 
    //done would control the waiting time.
    it('saves a user',(done) => {
        const joe = new User({
            user_name: 'Joe'
        });
        //insert a new record to mongo database
        joe.save()
        .then( () => { 
            assert(!joe.isNew);
            done();
        });
    });

    it('save a user with contact info',(done)=>{
        const joe = new User({
            user_name: 'Joe',
            contact_info: { 
                email:'joe@joe.com',
                phone:'1212123413'}
        });
        //insert a new record to mongo database
        joe.save()
        .then( () => { 
            assert(joe.contact_info.email === 'joe@joe.com');
            done();
        });
    });
});