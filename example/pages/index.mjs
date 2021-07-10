export const View = state => [
  h1(state.title),

  p([
    'this is the ',
    Link({ text: '@magic-modules', to: 'https://github.com/magic-modules' }),
    ' SoundCloud component.',
  ]),

  p(state.description),

  GitBadges('@magic-modules/sound-cloud'),

  h2({ id: 'installation' }, 'installation'),

  Pre('npm install @magic-modules/sound-cloud'),

  h2({ id: 'usage' }, 'usage'),

  p('in a page or module View'),

  h4('javascript'),
  Pre('SoundCloud(599883213)'),

  h4('markdown / html'),
  Pre('<SoundCloud>599883213</SoundCloud>'),

  p('renders'),

  SoundCloud(599883213),

  h3({ id: 'usage-tracks' }, 'tracks'),

  p('the track type shows a single track'),

  h4('javascript'),
  Pre("SoundCloud({ type: 'track', id: 599883213 })"),

  h4('markdown / html'),
  Pre('<SoundCloud type="track" id="599883213"></SoundCloud>'),

  p('renders'),

  SoundCloud({ type: 'track', id: 599883213 }),

  h3({ id: 'usage-playlists' }, 'playlists'),

  p('the playlists type shows a playlist of songs'),

  h4('javascript'),
  Pre("SoundCloud({ type: 'playlist', id: 641153793 })"),

  h4('markdown / html'),
  Pre('<SoundCloud type="playlist" id="641153793"></SoundCloud>'),

  p('renders'),

  SoundCloud({ type: 'playlist', id: 641153793 }),

  h3({ id: 'usage-users' }, 'users'),

  p('the users type shows a user profile.'),


  h4('javascript'),
  Pre("SoundCloud({ type: 'user', id: 151832569 })"),

  h4('markdown / html'),
  Pre('<SoundCloud type="user" id="151832569"></SoundCloud>'),

  p('renders'),

  SoundCloud({ type: 'user', id: 151832569 }),

  h2({ id: 'usage-default-arguments' }, 'default arguments'),

  p('@magic tries to keep the default arguments for soundcloud sane.'),

  h4('markdown'),
  Pre(`
<SoundCloud
  visual        ="true"         // set to false to get a smaller view with 166px height
  show_teaser   ="false"        // show an overlay with soundcloud ads
  show_reposts  ="false"        // show reposts for this track/user/playlist
  show_user     ="true"         // show the user that uploaded the track or playlist
  show_comments ="false"        // show comments people left
  auto_play     ="false"        // auto play video (will not work in many browsers anyways)
  hide_related  ="true"         // hide artists that might match or not
  height        ="300" || "166" // default height for visual true || false
  width         ="100%"
  scrolling     ="no"
  frameborder   ="no">
<SoundCloud>
}
`),

  h4('javascript'),
  Pre(`
SoundCloud({
  visual: true,         // set to false to get a smaller view with 166px height
  show_teaser: false,        // show an overlay with soundcloud ads
  show_reposts: false,        // show reposts for this track/user/playlist
  show_user: true,         // show the user that uploaded the track or playlist
  show_comments: false,        // show comments people left
  auto_play: false,        // auto play video (will not work in many browsers anyways)
  hide_related: true,         // hide artists that might match or not
  height: 300 || 166, // default height for visual true || false
  width: '100%',
  scrolling: "no",
  frameborder: "no",
}),
`),

  h2({ id: 'source' }, 'source'),

  p([
    'the source for this page is in the ',
    Link({
      text: 'example directory',
      to: 'https://github.com/magic-modules/sound-cloud/tree/master/example',
    }),
    ' and gets built and published to github using [@magic/core](https:/ / github.com / magic / core)',
  ]),
]
