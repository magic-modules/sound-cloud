const serializeParams = obj => {
  const e = encodeURIComponent
  const str = []
  Object.entries(obj).forEach(([p, entry]) => {
    str.push(`${e(p)}=${e(entry)}`)
  })
  return str.join('&')
}

module.exports = {
  serializeParams,
}
