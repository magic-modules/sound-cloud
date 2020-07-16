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
        { to: '/#usage-tracks', text: 'single track' },
        { to: '/#usage-playlists', text: 'playlists' },
        { to: '/#usage-users', text: 'user profile' },
        { to: '/#usage-default-arguments', text: 'default arguments' },
      ],
    },
    { to: '/#source', text: 'source' },
  ],
}
