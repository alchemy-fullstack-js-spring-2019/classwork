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
describe('USER.JS**toString', ()=>{
    it('using toString method print out name an email', ()=>{
        const user = new User('email@email.com', 'hank', '123123');
        expect(user.toString()).toEqual('hank | email@email.com');
    });
});
describe('USER.JS**resetPassword', ()=>{
    it('takes old password and new password, if old password == current password, reset password', ()=>{
        const user = new User('email@email.com', 'hank', '123123');
        const oldPassword = '123123';
        const newPassword = '321321';
        expect(user.resetPassword(oldPassword, newPassword)).toBe(newPassword);
    });
});
describe('USER.JS**resetPassword', ()=>{
    it('trying to reset password with wrong old password throws error', ()=>{
        
        expect(()=>{
            const user = new User('email@email.com', 'hank', '123123');
            user.resetPassword('12323', 'apple');
        }).toThrow();
    });
});
