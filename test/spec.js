const { is } = require('@magic/test')
const SoundCloud = require('../src')

module.exports = [
  { fn: () => SoundCloud, expect: is.function, info: 'expect SoundCloud to be a function' },
]
