const inquirer = require('inquirer');
const request = require('superagent');
const terminalImage = require('terminal-image');
const { post } = require('../commons/request');

const photoUrl = {
  type: 'input',
  name: 'photoUrl'
};

const caption = {
  type: 'input',
  name: 'caption'
};

const postHandler = () => {
  return inquirer.prompt([
    photoUrl,
    caption
  ])
    .then(({ photoUrl, caption }) => {
      return post('/posts', {
        photoUrl,
        caption
      });
    })
    .then(res => {
      return Promise.all([
        Promise.resolve(res.body),
        request.get(res.body.photoUrl).responseType('blob')
      ]);
    })
    .then(([tardyPost, res]) => {
      return Promise.all([
        Promise.resolve(tardyPost),
        terminalImage.buffer(res.body)
      ]);
    })
    .then(([tardyPost, img]) => {
      console.log(img);
      console.log(tardyPost.caption);
    });
};

module.exports = postHandler;
