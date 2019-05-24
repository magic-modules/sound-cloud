import { is } from '@magic/test'
import * as SoundCloud from '../src/index.mjs'

export default [
  {
    fn: () => SoundCloud.View,
    expect: is.function,
    info: 'expect SoundCloud.View to be a function',
  },
  {
    fn: () => SoundCloud.propTypes.SoundCloud,
    expect: is.array,
    info: 'expect SoundCloud.propTypes to be an array',
  },
]
