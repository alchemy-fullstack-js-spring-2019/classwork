const error = require('../../../lib/middleware/error');

describe('error middleware', () => {
  it('sets status to 500 and sends the error', () => {
    const res = {};
    res.status = jest.fn(() => res);
    res.send = jest.fn(() => res);

    error('Internal Server Error', {}, res, jest.fn());

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ error: 'Internal Server Error' });
  });

  it('sets status to 500 and sends the error message', () => {
    const res = {};
    res.status = jest.fn(() => res);
    res.send = jest.fn(() => res);

    error(new Error('Internal Server Error'), {}, res, jest.fn());

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ error: 'Internal Server Error' });
  });

  it('sets status to the error status and sends the error message', () => {
    const res = {};
    res.status = jest.fn(() => res);
    res.send = jest.fn(() => res);

    const err = new Error('Not Found');
    err.status = 404;

    error(err, {}, res, jest.fn());

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ error: 'Not Found' });
  });

});
