export const createNote = note => {
  return fetch('http://ec2-172-18293.compute.aws.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
    .then(res => {

    });
};
