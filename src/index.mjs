export const View = props => {
  let { src = false, height = false, type = 'tracks' } = props
  const {
    id = false,
    visual = type.startsWith('track') ? false : true,
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

    src = lib.uri.encode({
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

  CHECK_PROPS(p, propTypes, 'SoundCloud')

  return iframe(p)
}

export const propTypes = [
  { type: 'string' },
  { key: 'src', type: ['string', 'number'], required: ['id'] },
  { key: 'id', type: ['number', 'string'] },
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
