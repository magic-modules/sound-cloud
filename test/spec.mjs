import { is } from '@magic/test'
import * as SoundCloud from '../src/index.mjs'

export default [
  {
    fn: () => SoundCloud.View,
    expect: is.function,
    info: 'expect SoundCloud.View to be a function',
  },
  {
    fn: () => SoundCloud.propTypes,
    expect: is.array,
    info: 'expect SoundCloud.propTypes to be an array',
  },
  { fn: () => SoundCloud.lib, expect: is.object, info: 'expect SoundCloud.lib to be an object' },
]
