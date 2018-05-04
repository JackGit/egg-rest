const assert = require('assert')
/**
 *
 */
module.exports = app => {
  const index = app.config.appMiddleware.indexOf('rest')
  assert.equal(index, -1, 'Duplication of middleware name found: rest. Rename your middleware other than "rest" please.')
  app.config.coreMiddleware.unshift('rest')

  const restConfig = app.config.rest
  const {
    fieldsMapping,
    useHttpStatusCode,
    onValidate,   // customized parameter validator
    onAuthorize,  // customized authorize method, default is JWT
    onError,
    authIgnore
  } = restConfig


  app.rest = {
    parseQuery (query) {
      // type convert for pagination fields
      // sort parse
    }
  }
}
