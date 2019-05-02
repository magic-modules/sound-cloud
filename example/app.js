module.exports = {
  state: {
    logotext: 'sound-cloud',
    menu: [
      { to: '/#installation', text: 'installation' },
      { to: '/#require', text: 'require' },
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
  },
}
