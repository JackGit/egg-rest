'use strict';

const mock = require('egg-mock');

describe('test/rest.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/rest-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, rest')
      .expect(200);
  });
});
