module.exports = options => async (ctx, next) => {
  console.log('egg-rest rest middleware')

  try {
    await next()
  } catch (e) {
    // set response for errors
    // if error is rest.throw error, set statusCode as passed in error
    // otherwise, throw 500 as statusCode
  }

}
