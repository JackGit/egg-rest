const { paginationObj } = require('../../lib/utils.js')

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
