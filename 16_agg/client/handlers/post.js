const inquirer = require('inquirer');
const request = require('superagent');
const { post } = require('../commons/request');
const terminalImage = require('terminal-image');

const askCaption = {
  type: 'input',
  name: 'caption'
};

const askPhotoUrl = {
  type: 'input',
  name: 'photoUrl'
};

const postHandler = () => inquirer.prompt([
  askCaption,
  askPhotoUrl
])
  .then(({ caption, photoUrl }) => {
    return post('/posts', {
      caption,
      photoUrl
    });
    // return request
    //   .post('http://localhost:7890/api/v1/posts')
    //   .set('Authorization', `Bearer ${token}`)
    //   .send({
    //     caption,
    //     photoUrl
    //   });
  })
  .then(res => {
    return Promise.all([
      Promise.resolve(res.body),
      request.get(res.body.photoUrl)
    ]);
  })
  .then(([createdPost, imgRes]) => {
    return Promise.all([
      Promise.resolve(createdPost),
      terminalImage.buffer(imgRes.body)
    ]);
  })
  .then(([createdPost, img]) => {
    console.log(img);
    console.log(createdPost.caption);
  })
  .then(postHandler);

module.exports = postHandler;
