const notFound = require('../../lib/middleware/not-found');

describe('not found middleware', () => {
  it('responds with a status of 404 and json Not Found', () => {
    const req = {};
    const next = jest.fn();

    const res = {};
    const status = jest.fn(() => res);
    res.status = status;

    const send = jest.fn(() => res);
    res.send = send;

    notFound(req, res, next);
    expect(status).toHaveBeenCalledWith(404);
    expect(send).toHaveBeenCalledWith({ error: 'Not Found' });
  });
});
