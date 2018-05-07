const { DEFAULT_FIELDS_MAPPING } = require('../../lib/constants')
const { paginationObj, fieldName } = require('../../lib/utils')

module.exports = {
  success (data, pagination) {
    this.body = {
      status: 'OK',
      statusCode: 0,
      data: pagination ? {
        list: data,
        meta: paginationObj(pagination)
      } : data
    }
  },

  failure () {

  },

  badRequest () {

  },

  unauthorized () {

  }
}
