const SoundCloud = props => {
  const {
    id = false,
    visual = true,
    show_teaser = false,
    show_reposts = false,
    show_user = true,
    show_comments = false,
    auto_play = false,
    hide_related = true,
    width = '100%',
    scrolling = 'no',
    frameborder = 'no',
  } = props

  let { src = false, height = false, type = 'tracks' } = props
  if (!id && !src) {
    return
  }

  if (!height) {
    if (!visual) {
      height = 166
    } else if (type === 'tracks') {
      height = 200
    } else {
      height = 450
    }
  }

  if (!src) {
    if (type === 'track') {
      type = 'tracks'
    } else if (type === 'playlist') {
      type = 'playlists'
    } else if (type === 'user') {
      type = 'users'
    }

    const host = 'https://w.soundcloud.com/player'
    const url = `https://api.soundcloud.com/${type}/${id}`

    src = LIB.URI.encode({
      host,
      params: {
        url,
        show_teaser,
        show_reposts,
        show_user,
        show_comments,
        auto_play,
        hide_related,
        visual,
      },
    })
  }

  const p = {
    width,
    height,
    scrolling,
    frameborder,
    src,
  }

  if (auto_play) {
    p.allow = 'autoplay'
  }

  CHECK_PROPS({ src, height, type }, SoundCloud.props, 'SoundCloud')

  return iframe(p)
}

SoundCloud.lib = {
  URI: require.resolve('@magic-client/uri'),
}

SoundCloud.props = [
  { key: 'src', type: 'string', required: true },
  { key: 'id', type: 'boolean' },
  { key: 'visual', type: 'boolean' },
  { key: 'show_teaser', type: 'boolean' },
  { key: 'show_reposts', type: 'boolean' },
  { key: 'show_user', type: 'boolean' },
  { key: 'show_comments', type: 'boolean' },
  { key: 'auto_play', type: 'boolean' },
  { key: 'hide_related', type: 'boolean' },
  { key: 'width', type: ['string', 'number'] },
  { key: 'height', type: ['string', 'number', 'boolean'] },
  { key: 'scrolling', type: ['string'] },
  { key: 'frameborder', type: ['string'] },
]

module.exports = SoundCloud
