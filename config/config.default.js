const { DEFAULT_FIELDS_MAPPING } = require('../lib/constants')

module.exports = app => {
  const exports = {}

  exports.rest = {
    authIgnore: null,
    useHttpStatusCode: true,
    fieldsMapping: DEFAULT_FIELDS_MAPPING
  }

  return exports
}
