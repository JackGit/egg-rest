const status = require('statuses')

const response = ctx => ({
  status = status[200], // => OK
  statusCode = 200,     // => 200
  data,
  error // { code, message, details }
}) => {
  const { useHttpStatusCode, fieldMapping } = config // TODO read config
  ctx.response.type = 'json'

  const body = {
    [fieldName('response.data', fieldMapping)]: data
  }

  if (error) {
    body[fieldName('response.error', fieldMapping)] = error
  }

  if (!useHttpStatusCode) {
    body[fieldName('response.status', fieldMapping)] = status,
    body[fieldName('response.statusCode', fieldMapping)] = statusCode
  }

  ctx.body = body
}

/**
 * app.rest.throw(statusCode, { code, message, details })
 * will throw an error, which will be handled in middleware
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
const throw = ctx => () => {

}

const r200 = ctx => () => {

}
const r404 = ctx => () => {}
const r500 = ctx => () => {}
