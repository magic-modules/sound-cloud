module.exports = () => [
  h1('@magic-modules/sound-cloud'),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' SoundCloud component.',
    'it embeds soundcloud tracks, playlist and user widgets.',
  ]),

  GitBadges({
    project: 'magic-modules/sound-cloud',
    appveyor: 'jaeh/sound-cloud',
  }),

  h2({ id: 'installation' }, 'installation:'),
  Pre('npm install magic-modules/sound-cloud'),

  h2({ id: 'require' }, 'require:'),
  p('first add the component to the assets'),
  Pre(`
// assets/index.js
module.exports = {
  //...other exports
  SoundCloud: require('@magic-modules/sound-cloud'),
}`),
  h2({ id: 'usage' }, 'usage:'),
  p('in a page or component'),
  Pre('module.exports = {\n  View: () => SoundCloud(props),\n}'),

  h3({ id: 'usage-tracks' }, 'tracks'),
  p('the track type shows a single track'),
  Pre("SoundCloud({ type: 'track', src: '599883213' })"),
  p('renders'),
  SoundCloud({ type: 'track', id: 599883213 }),

  h3({ id: 'usage-playlists' }, 'playlists'),
  p('the playlists type shows a playlist'),
  Pre("SoundCloud({ type: 'playlist', src: '613360614' })"),
  p('renders'),
  SoundCloud({ type: 'playlist', id: 293975290 }),

  h3({ id: 'usage-users' }, 'users'),
  p('the users type shows a user profile'),
  Pre("SoundCloud({ type: 'users', src: '613360614' })"),
  p('renders'),
  SoundCloud({ type: 'user', id: 151832569, hide_related: false }),

  h2({ id: 'usage-default-arguments' }, 'default arguments'),
  p('@magic tries to keep the default arguments for soundcloud sane.'),
  Pre(`{
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
}`),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-modules/sound-cloud/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
