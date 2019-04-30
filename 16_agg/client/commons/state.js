let token = null;

const getToken = () => {
  return token;
};

const setToken = newToken => {
  token = newToken;
};

module.exports = {
  getToken,
  setToken
};
