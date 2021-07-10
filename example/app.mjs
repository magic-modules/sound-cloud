export const state = {
  title: '@magic-modules/sound-cloud',
  description: 'embeds soundcloud tracks, playlist and user widgets.',
  logotext: 'SoundCloud',

  menu: [
    { to: '/#installation', text: 'installation' },
    {
      to: '/#usage',
      text: 'usage',
      items: [
        { to: '-tracks', text: 'single track' },
        { to: '-playlists', text: 'playlists' },
        { to: '-users', text: 'user profile' },
        { to: '-default-arguments', text: 'default arguments' },
      ],
    },
    { to: '/#source', text: 'source' },
  ],
}
