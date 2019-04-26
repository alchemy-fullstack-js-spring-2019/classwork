const inquirer = require('inquirer');
const { post } = require('../commons/request');

const signupOrSignin = {
  type: 'list',
  name: 'authType',
  choices: [
    { name: 'signup', value: '/auth/signup' },
    { name: 'signin', value: '/auth/signin' }
  ]
};

const askEmail = {
  type: 'input',
  name: 'email'
};

const askPassword = {
  type: 'password',
  name: 'password'
};

const authHandler = () => {
  return inquirer.prompt([
    signupOrSignin,
    askEmail,
    askPassword
  ])
    .then(answers => {
      const {
        authType,
        email,
        password
      } = answers;

      return post(authType, { email, password });
    });
};

module.exports = authHandler;
