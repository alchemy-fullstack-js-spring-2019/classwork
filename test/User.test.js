const User = require('../lib/User');

describe('user name, email, and password are generated with constructor', ()=>{
    it('make sure that user has email, name, and password', ()=>{
        const user = new User('email@email.com', 'hank', '123123');
        expect(user.email).toBe('email@email.com');
        expect(user.name).toBe('hank');
        expect(user.password).toBe('123123');
    });
});

describe('user id is generated automatically', ()=>{
    it('make sure that id is generated automatically', ()=>{
        const user = new User('email@email.com', 'hank', '123123');
        expect(user.uid).toEqual(expect.any(String));
    });
});
describe('USER.JS**', ()=>{
    it('make sure that id is generated automatically', ()=>{
        const user = new User('email@email.com', 'hank', '123123');
        expect(user.uid).toEqual(expect.any(String));
    });
});
