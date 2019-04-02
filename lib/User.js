const uuidv4 = require('uuid/v4');

class User{
    constructor(email, name, password){
        this.email = email;
        this.name = name;
        this.password = password;
        this.uid = uuidv4();
    }
}

module.exports = User;
