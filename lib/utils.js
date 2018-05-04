
/**
 * 'createdAt'  =>  ['createdAt', 'ASC']
 * '-createdAt' =>  ['createdAt', 'DESC']
 * '-createdAt,name' => [['createdAt', 'DESC'], ['name', 'ASC']]
 */
exports.parseSort = value => {
  const parse = v => v.startsWith('-') ? [v.substring(1), 'DESC'] : [v, 'ASC']
  const values = value.split(',')
  return values.length > 0 ? values.map(v => parse(v)) : [parse(value)]
}

/**
 * /api/xxx         hasQuery(query, 'name') => false
 * /api/xxx?name=   hasQuery(query, 'name') => false
 * /api/xxx?name=0  hasQuery(query, 'name') => true
 */
exports.hasQuery = (query, key, includeEmptyString = true) => (key in query) && (includeEmptyString ? true : query[key] !== '')

/**
 * get unified pagination object
 */
exports.paginationObj = ({ page, pageSize, total }) => ({
  page: +page,
  pageSize: +pageSize,
  total: +total,
  totalPage: Math.ceil(total / pageSize)
})

/**
 * get mapped field name.
 * fieldName('statusCode', { statusCode: 'status_code' }) => 'statusCode'
 */
exports.fieldName = (name, mapping) => {
  return (mapping && mapping[name]) ? mapping[name] : name
}
