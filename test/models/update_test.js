//Genral update using and $inc operator example

const assert = require('assert');
const User = require('../../src/models/user');

describe('Updateing records ',()=>{
    let joe;
    
    beforeEach((done) => {
        joe = new User({user_name: 'Joe',postCount:0});
        joe.save()
        .then( ()=> done());
    });
    function assertName(operation, done) {
        operation.then(()=> User.find({}) ).then( (users) => {
            assert(users.length ===1);
            assert(users[0].user_name === 'Alex');
            console.log(users[0]);
            done();
        });
    }

    //we can set different proerpties sepratily 
    it('A model instance type using set and save',(done)=>{
        console.log(joe);
        joe.set('user_name','Alex');
        assertName(joe.save(),done);
    });
    it('A model instance can update', (done)=>{
        
        assertName( joe.update({user_name:'Alex'}),done);
    });
    it('A model class can update one record',(done)=>{
        assertName(
        User.update({user_name:'Joe'},{user_name:'Alex'}), done);
    });
    it('A model class method findOneAndUpdate can update one record',(done)=>{
        assertName(
            User.findOneAndUpdate({user_name:'Joe'},{user_name:'Alex',contact_info:{email:'alex@alex.com'}})
            ,done);
    });
    it('A model class method findByIdAndUpdate can update one record',(done)=>{
        assertName(
        User.findByIdAndUpdate(joe._id, {user_name:'Alex'})
        ,done);
    });
    /*
    it('A user can update their email',(done) => {
        //$inc mongo server would increas the value of fieldrecord
        User.update({user_name:'Joe'},{$inc:{postCount:10}})
        .then(()=> User.findOne({user_name:'Joe'}))
        .then((user)=>{
            assert(user.postCount ===10);
            done();
        });
    });
    */
});