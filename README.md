## @magic-modules/sound-cloud
this is the [@magic-modules][magic-module-url]
SoundCloud component.

it embeds soundcloud tracks, playlist and user widgets.

[html docs][doc-url]

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

### <a name="installation"></a>installation:
```bash
npm install magic-modules/sound-cloud
```

### <a name="usage"></a>usage
in a page or module View
```javascript
module.exports = {\n  View: () => SoundCloud(props),\n}
```

#### <a name="usage-tracks"></a>tracks
the track type shows a single track

```javascript
SoundCloud({ type: 'track', src: '599883213' })
```

#### <a name="usage-playlists"></a>playlists
the playlists type shows a playlist

```javascript
SoundCloud({ type: 'playlist', src: '613360614' })
```

#### <a name="usage-users"></a>users
the users type shows a user profile
```javascript
SoundCloud({ type: 'users', src: '613360614' })
```

### <a name="usage-default-args"></a>default arguments
@magic tries to keep the default arguments for soundcloud sane.
```javascript
{
  visual = true,         // set to false to get a smaller view with 166px height
  show_teaser = false,   // show an overlay with soundcloud ads
  show_reposts = false,  // show reposts for this track/user/playlist
  show_user = true,      // show the user that uploaded the track or playlist
  show_comments = false, // show comments people left
  auto_play = false,     // auto play video (will not work in many browsers anyways)
  hide_related = true,   // hide artists that might match or not
  height = 300 || 166,   // default height for visual true || false
  width = '100%',
  scrolling = 'no',
  frameborder = 'no',
}
```

[magic-module-url]: https://github.com/magic-modules/
[doc-url]: https://magic-modules.github.io/sound-cloud/

[npm-image]: https://img.shields.io/npm/v/@magic-modules/sound-cloud.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/sound-cloud
[travis-image]: https://api.travis-ci.org/magic-modules/sound-cloud.svg?branch=master
[travis-url]: https://travis-ci.org/magic-modules/sound-cloud
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/sound-cloud/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/sound-cloud/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/sound-cloud/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/sound-cloud
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/sound-cloud.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/sound-cloud.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/sound-cloud/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/sound-cloud
