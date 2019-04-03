const uuidv4 = require('uuid/v4');

class User{
    constructor(email, name, password){
        this.email = email;
        this.name = name;
        this.password = password;
        this.uid = uuidv4();
    }
    toString(){
        return `${this.name} | ${this.email}`;
    }
    resetPassword(oldPassword, newPassword){
        if(oldPassword === this.password){
            this.password = newPassword;
        }
        else {
            throw 'your old passowrd doesnt match';
        }
        return this.password;
    }
}

module.exports = User;
