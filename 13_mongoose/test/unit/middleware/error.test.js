const errorMiddleware = require('../../../lib/middleware/error');

describe('error middleware', () => {
  it('sets the status to 500 and sends the error', () => {
    const error = 'No good';
    const res = {};
    res.status = jest.fn(() => res);
    res.send = jest.fn(() => res);

    errorMiddleware(error, {}, res, () => { });

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({
      error
    });
  });

  it('sets the status to error status and sends the error message', () => {
    const error = new Error('Not Found');
    error.status = 404;
    const res = {};
    res.status = jest.fn(() => res);
    res.send = jest.fn(() => res);

    errorMiddleware(error, {}, res, () => { });

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({
      error: error.message
    });
  });
});
