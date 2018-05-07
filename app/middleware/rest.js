module.exports = options => async (ctx, next) => {
  console.log('egg-rest rest middleware')

  try {
    await next()
  } catch (e) {
    
  }

}
